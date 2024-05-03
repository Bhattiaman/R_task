const fetchJobs = async (limit, offset) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
  
    const body = JSON.stringify({
      "limit": limit,
      "offset": offset
    });
  
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: body
    };
  
    try {
      const response = await fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions);
      if (!response.ok) {
        throw new Error('Failed to fetch job listings');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  };
  
  export default fetchJobs;
      