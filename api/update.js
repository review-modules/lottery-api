module.exports = (req, res) => {
  let obj = {
    url:
      "https://github.com/lomocc/lottery/releases/download/latest/app-armeabi-v7a-release.apk",
    versionCode: 4,
    updateMessage: "1. 适配 Android 8.0\n2. 适配 Android 9.0\n3. 更新说明"
  };
  res.status(200).send(obj);
};
