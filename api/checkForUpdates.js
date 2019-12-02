module.exports = (req, res) => {
  let obj = {
    browser_download_url:
      "http://github.lomo.cc/lomocc/lottery-release/releases/download/v0.0.3/app-armeabi-v7a-release.apk",
    version_code: 1048579
  };
  res.status(200).send(obj);
};
