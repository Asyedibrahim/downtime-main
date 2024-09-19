import Website from '../models/website.model.js';
import axios from 'axios';

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
      const websites = await Website.find(); // Fetch all URLs from the database

      const results = await Promise.all(
          websites.map(async (website) => {
              const { url } = website;
              const startAt = new Date();

              try {
                  const response = await axios.get(url, {
                      timeout: 10000 // Adjust timeout as needed
                  });

                  const endAt = new Date();
                  const duration = (endAt - startAt) / 1000; // Duration in seconds

                  return {
                      url,
                      status: response.status === 200 ? 'Up' : 'Down',
                      httpCode: response.status,
                      startAt: startAt.toLocaleString(),
                      endAt: endAt.toLocaleString(),
                      duration: `${Math.floor(duration / 60)}min, ${Math.floor(duration % 60)}s`
                  };
              } catch (error) {
                  const endAt = new Date();
                  const duration = (endAt - startAt) / 1000; // Duration in seconds

                  return {
                      url,
                      status: 'Down',
                      httpCode: error.response ? error.response.status : 503,
                      startAt: startAt.toLocaleString(),
                      endAt: endAt.toLocaleString(),
                      duration: `${Math.floor(duration / 60)}min, ${Math.floor(duration % 60)}s`
                  };
              }
          })
      );

      res.status(200).json(results);
  } catch (error) {
      res.status(500).json({ error: 'Server Error' });
  }
};