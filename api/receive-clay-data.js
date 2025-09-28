export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const enrichedData = req.body;
    console.log('Received enriched data from Clay:', enrichedData);
    
    // For now, just log and return success
    // Later you can store this in a database
    res.status(200).json({ 
      success: true, 
      message: 'Data received successfully',
      data: enrichedData 
    });
  } catch (error) {
    console.error('Error processing Clay data:', error);
    res.status(500).json({ error: 'Failed to process data' });
  }
}
