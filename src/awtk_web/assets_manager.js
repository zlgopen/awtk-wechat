function AssetsManager() {}

AssetsManager.exist = function (type, name) {
  const assets = g_awtk_assets[type];
  if (assets) {
    const asset = assets.find(iter => {
      return name == iter.name;
    });

    return !!asset;
  }

  return false;
}

AssetsManager.getImageByDPI = function (name, dpi) {
  let anydpi = '/xx/';
  const assets = g_awtk_assets['image'];
  if (assets) {
    const asset = assets.find(iter => {
      return name == iter.name && (iter.uri.indexOf(anydpi) >= 0 || iter.uri.indexOf(dpi) >= 0);;
    });

    return asset;
  }

  return null;
}

AssetsManager.getImage = function (name) {
  let dpi = '/x' + TBrowser.getDevicePixelRatio() + '/';
  let asset = AssetsManager.getImageByDPI(name, dpi);

  if(!asset) {
    asset = AssetsManager.getImageByDPI(name, '/x1/');
  }

  if(!asset) {
    console.log('Not found ' + name);
  }

  return asset;
}

AssetsManager.getImageURI = function (name) {
  const asset = AssetsManager.getImage(name);

  return asset ? asset.uri : null;
}

AssetsManager.getFontURI = function (name) {
  const assets = g_awtk_assets['font'];
  if (assets) {
    const asset = assets.find(iter => {
      return name == iter.name;
    });

    return asset ? asset.uri : null;
  }

  return null;
}

AssetsManager.preloadFonts = function () {
  const fonts = g_awtk_assets['font'];
  if(fonts && fonts.length > 0) {
    fonts.forEach(function(iter){
      if(iter.name.indexOf('default') != 0) {
        TBrowser.loadFont(iter.name, iter.uri);         
      }
    });
  }

  return true;
}


