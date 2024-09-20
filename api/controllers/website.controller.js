import Website from '../models/website.model.js';
import axios from 'axios';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'syedibrahim7252@gmail.com',
    pass: process.env.APP_PASSWORD,
  },
});

// Object to store the last known status of each website
const websiteStatus = {};

const sendAlertEmail = async (downWebsites) => {
  const mailOptions = {
    from: 'syedibrahim7252@gmail.com',
    to: 'syedirctc45362@gmail.com',
    subject: 'Website Down Alert',
    text: `The following websites are currently down:\n${downWebsites.join('\n')}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`Alert email sent for: ${downWebsites.join(', ')}`);
  } catch (error) {
    console.error('Error sending alert email:', error);
  }
};

export const addUrl = async (req, res) => {
  const { url } = req.body;

  if (!url) {
    return res.status(400).json({ error: 'URL is required' });
  }

  try {
    const website = new Website({ url });
    await website.save();
    res.status(201).json({ message: 'URL added successfully', website });
  } catch (error) {
    res.status(500).json({ error: 'Server Error' });
  }
};

export const getUrls = async (req, res) => {
  try {
    const websites = await Website.find();
    const downWebsites = []; // Array to hold down websites

    const results = await Promise.all(
      websites.map(async (website) => {
        const { _id, url } = website;
        const startAt = new Date();

        try {
          const response = await axios.get(url, {
            timeout: 10000, // Adjust timeout as needed
          });

          const endAt = new Date();
          const duration = (endAt - startAt) / 1000; // Duration in seconds

          // Update status if the website is up
          websiteStatus[url] = 'Up';

          return {
            _id,
            url,
            status: 'Up',
            httpCode: response.status,
            startAt: startAt.toLocaleString(),
            endAt: endAt.toLocaleString(),
            duration: `${Math.floor(duration / 60)}min, ${Math.floor(duration % 60)}s`,
          };
        } catch (error) {
          const endAt = new Date();
          const duration = (endAt - startAt) / 1000; // Duration in seconds

          // Check if the previous status was 'Up' to send an alert
          if (websiteStatus[url] !== 'Down') {
            downWebsites.push(url); // Add to down websites list
            websiteStatus[url] = 'Down'; // Update status to 'Down'
          }

          return {
            _id,
            url,
            status: 'Down',
            httpCode: error.response ? error.response.status : 503,
            startAt: startAt.toLocaleString(),
            endAt: endAt.toLocaleString(),
            duration: `${Math.floor(duration / 60)}min, ${Math.floor(duration % 60)}s`,
          };
        }
      })
    );

    // Send a single email if there are any down websites
    if (downWebsites.length > 0) {
      await sendAlertEmail(downWebsites);
    }

    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ error: 'Server Error' });
  }
};

export const deleteUrl = async (req, res) => {
  try {

    if (!req.params.id) {
      return res.status(500).json({ error: 'Website url not found!!' });
    }

    await Website.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Url is deleted!' })

  } catch (error) {
    res.status(500).json({ error: 'Server Error' });
  }
};

export const editUrl = async (req, res) => {
  try {
    if (!req.params.id) {
      return res.status(500).json({ error: 'Website url not found!!' });
    }

    const editedUrl = await Website.findByIdAndUpdate(
      req.params.id, 
      req.body, 
      { new: true}
    );
    res.status(200).json(editedUrl);

  } catch (error) {
    res.status(500).json({ error: 'Server Error' });
  }
};

export const getUrl = async (req, res) => {
  try {
    if (!req.params.id) {
      return res.status(500).json({ error: 'Website url not found!!' });
    }

    const get = await Website.findById(req.params.id);
    res.status(200).json(get);
    
  } catch (error) {
    res.status(500).json({ error: 'Server Error' });
  }
}