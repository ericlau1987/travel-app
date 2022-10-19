const fetchCityWeatherImg = async (url = '', data = { city: '', lang: '' }) => {
    try {
      const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        // mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });
  
      const newData = await response.json();

      const n_result = newData.totalHits
      
      const default_img_url = 'https://cdn.britannica.com/64/190464-050-B74E1FD9/view-central-business-district-Melbourne-train-station.jpg';
      
      if (n_result != 0){
        let max_view = 0
        let pop_img = ''
        for (let i = 0; i < n_result; i++ ) {
          if (newData.hits[i].views > max_view) {
            max_view = newData.hits[i].views
            pop_img = newData.hits[i].webformatURL
          }
        }
        return pop_img
      } else {
        // return default_img_url;
      }

      return newData;
    } catch (error) {
      alert('Sorry, something went wrong!');
      return error;
    }
  };
  
  module.exports = {
    fetchCityWeatherImg
  };