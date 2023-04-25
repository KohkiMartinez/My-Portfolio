import { getGeoData } from "../src/server/serverForTesting";

const fetch = require('node-fetch');

describe('getGeoData function', () => {
  test('should return correct longitude and latitude data for a given city', async () => {
    const req = {
      body: {
        city_name: 'Tokyo'
      }
    };
    const sendMock = jest.fn();
    const res = { send: sendMock };

    const mockData = {
      geonames: [{
        lng: 139.69171,
        lat: 35.6895
      }]
    };
    jest.spyOn(fetch, 'Promise').mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockData)
    });

    await getGeoData(req, res);

    expect(sendMock).toHaveBeenCalledWith({
      lngVal: mockData.geonames[0].lng,
      latVal: mockData.geonames[0].lat
    });
  });
});
