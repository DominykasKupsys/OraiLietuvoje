const fetch = require("node-fetch");
module.exports = {
  test: async (req, res) => {
    try {
      const apiVilnius = await fetch(
        "https://api.meteo.lt/v1/places/kaunas/forecasts/long-term"
      );
      const apiKaunas = await fetch(
        "https://api.meteo.lt/v1/places/kaunas/forecasts/long-term"
      );
      const apiKlaipeda = await fetch(
        "https://api.meteo.lt/v1/places/klaipeda/forecasts/long-term"
      );
      const dataVilnius = await apiVilnius.json();
      const dataKaunas = await apiKaunas.json();
      const dataKlaipeda = await apiKlaipeda.json();
      res.render("orai/index", {
        vilnius1: dataVilnius.forecastTimestamps[4],
        vilnius2: dataVilnius.forecastTimestamps[28],
        vilnius3: dataVilnius.forecastTimestamps[52],
        vilnius4: dataVilnius.forecastTimestamps[16],
        vilnius5: dataVilnius.forecastTimestamps[40],
        vilnius6: dataVilnius.forecastTimestamps[64],
        kaunas1: dataVilnius.forecastTimestamps[4],
        kaunas2: dataVilnius.forecastTimestamps[28],
        kaunas3: dataVilnius.forecastTimestamps[52],
        kaunas4: dataVilnius.forecastTimestamps[16],
        kaunas5: dataVilnius.forecastTimestamps[40],
        kaunas6: dataVilnius.forecastTimestamps[64],
        klaipeda1: dataVilnius.forecastTimestamps[4],
        klaipeda2: dataVilnius.forecastTimestamps[28],
        klaipeda3: dataVilnius.forecastTimestamps[52],
        klaipeda4: dataVilnius.forecastTimestamps[16],
        klaipeda5: dataVilnius.forecastTimestamps[40],
        klaipeda6: dataVilnius.forecastTimestamps[64],
      });
    } catch (err) {
      console.log(err);
      res.status(500).send("Server error");
    }
  },
  show: async (req, res) => {
    const miestoPavadinimas = req.params.id
    try {
      const apiMiesto = await fetch(
        "https://api.meteo.lt/v1/places/" + miestoPavadinimas + "/forecasts/long-term"
      );
      const dataMiesto = await apiMiesto.json();
      res.render("orai/view", {miestai: dataMiesto.forecastTimestamps, miestopavadinimas:dataMiesto.place}
      );
    } catch (err) {
      console.log(err);
      res.status(500).send("Server error");
    }
  },
  miestai: async (req, res) => {

    try {
      const apiMiestu = await fetch(
        "https://api.meteo.lt/v1/places/"
      );
      const dataMiestu = await apiMiestu.json();
      res.render("orai/miestuSarasas", {miestai: dataMiestu}
      );
    } catch (err) {
      console.log(err);
      res.status(500).send("Server error");
    }
  },
};
