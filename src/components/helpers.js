export const getImagePath = (widgetData) => {
  let imgPath = "";
  try {
    imgPath = require(`@/assets/svg/${widgetData.weatherDescription}.svg`);
  } catch {
    imgPath = require(`@/assets/svg/${widgetData.WeatherIconSrc}.svg`);
  }
  return imgPath;
};
