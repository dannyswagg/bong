import {
  Application,
  CoinTossAssets,
  Container,
  Graphics,
  Point,
  Sprite,
  Text,
  TextStyle,
  Texture,
  sound
} from "./chunk-WGUPDZQJ.js";
import {
  NgZone,
  Renderer2,
  ReplaySubject,
  Subject,
  delay,
  from,
  fromEvent,
  sampleTime,
  switchMap,
  take,
  tap,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵinject,
  ɵɵloadQuery,
  ɵɵqueryRefresh,
  ɵɵviewQuery
} from "./chunk-MID2NTGF.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-CPNXOV62.js";

// src/app/sic-bo/coin-toss/coin-toss-z-index.ts
var CoinTossZIndex = {
  calHistory: {
    i: 1e3,
    percent: {
      top: 10,
      left: 2106
    }
  },
  table: {
    i: 1
  },
  dealer: {
    i: 1e3,
    n: "dealer"
  },
  /*
  Đĩa game
   */
  plate: {
    i: 200,
    a: 2e3
  },
  /*
    Các ô đặt cược giữa bàn: Chẵn Lẻ và 5 ô con
   */
  bettingSpot: {
    i: 100,
    n: "spotsContainer",
    spot: {
      n: (spotIndex) => "spot" + spotIndex.toString()
    },
    spot1: {
      // n: 'spot1',
      actionIndex: 1
    },
    spot2: {
      // n: 'spot2',
      actionIndex: 2
    },
    spot3: {
      // n: 'spot3',
      actionIndex: 3
    },
    spot4: {
      // n: 'spot7',
      actionIndex: 7
    },
    spot5: {
      // n: 'spot4',
      actionIndex: 4
    },
    spot6: {
      // n: 'spot5',
      actionIndex: 5
    },
    spot7: {
      // n: 'spot6',
      actionIndex: 6
    },
    spotArea: {
      n: (areaIndex) => "spotArea" + areaIndex.toString()
    }
  },
  /*
  30 ô lịch sử ngang dưới bảng
   */
  tableHistory: {
    i: 110
  },
  /*
  Các người chơi
   */
  player: {
    i: 1e3,
    n: "playerContainer",
    other: {
      n: "otherPlayer"
    },
    o: {
      avatar: {
        container: {
          n: "avatarContainer"
        },
        n: "avatar"
      },
      balance: {
        background: {
          n: "balanceBackground"
        }
      }
    }
  },
  /*
  Danh sách các đồng tiền cược
   */
  denomination: {
    i: 120,
    n: "denominationsContainer",
    mask: {
      n: "denominationsMaskWrapper",
      wrapper: {
        n: "denominationsWrapper"
      }
    },
    item: {
      n: (amount) => "denomination" + amount.toString(),
      active: {
        n: "denominationActive"
      },
      icon: {
        n: "icon"
      }
    }
  },
  /*
  Danh sách các coin đang đặt cược nằm trên bàn
  Các hiệu ứng Coin di chuyển từ người chơi xuống ô spot
  Các hiệu ứng Coin thua di chuyển về dealer và coin thắng di chuyển từ dealer về spot và về người chơi
   */
  listCoinBet: {
    i: 900
  },
  coinTossWinAnimation: {
    i: 1e3,
    n: "winAnimationContainer"
  }
};

// src/app/sic-bo/coin-toss/coin-toss-plate.ts
var CoinTossPlate = class {
  destroy() {
    this.plate01?.destroy();
    this.plate02?.destroy();
    this.plateContainer?.destroy();
    this.plate01 = null;
    this.plate02 = null;
    this.plateContainer = null;
  }
  constructor(container) {
    this.container = container;
    this.plateContainer = new Container();
    this.plate01Width = 172;
    this.plate01Height = 165;
    this.plate01Ratio = this.plate01Width / this.plate01Height;
    this.plate02Width = 186;
    this.plate02Height = 180;
    this.plate02Ratio = this.plate02Width / this.plate02Height;
    this.assets = CoinTossAssets.getInstance();
    this.containerHeight = 649;
    this.containerWidth = 553;
    this.coinContainer = new Container();
    this.coinContainerWidth = 260;
    this.coinContainerHeight = 260;
    this.shakeAmplitude = 10;
    this.shakeFrequency = 0.8;
    this.shakeTime = 0;
    this.plateContainer.sortableChildren = true;
    this.plateContainer.width = this.containerWidth;
    this.plateContainer.height = this.containerHeight;
    this.plate01 = new Sprite(this.assets.gameAssets.coinToss.plate01);
    this.plate02 = new Sprite(this.assets.gameAssets.coinToss.plate02);
    this.plate01.zIndex = 20;
    this.plateContainer.zIndex = CoinTossZIndex.plate.i;
    this.plate02.zIndex = 1;
    this.plate02.width = 417;
    this.plate02.height = this.plate02.width / this.plate02Ratio;
    this.plate02.x = 23;
    this.plate02.y = this.containerHeight - this.plate02.height - 23;
    this.plate01.width = 370;
    this.plate01.height = this.plate01.width / this.plate01Ratio;
    this.plate01.x = this.plate02.x + 26;
    this.plate01.y = this.plate02.y + 20;
    this.plateContainer.addChild(this.plate02);
    this.plateContainer.addChild(this.plate01);
    this.plateContainer.x = 1540;
    this.plateContainer.y = 443;
    this.container.addChild(this.plateContainer);
  }
  addCoin(coin01, coin02) {
    this.coinContainer.sortableChildren = true;
    this.coinContainer.zIndex = 10;
    this.coinContainer.width = this.coinContainerWidth;
    this.coinContainer.height = this.coinContainerHeight;
    this.coinContainer.x = 100;
    this.coinContainer.y = 290;
    const coinPositions = [];
    for (let i = 0; i < coin01; i++) {
      const coin = new Sprite(this.assets.gameAssets.coinToss.coin01);
      coin.width = 87;
      coin.height = 87;
      let newPosition;
      do {
        newPosition = this.getRandomPosition(coin.width, coin.height, this.coinContainerWidth, this.coinContainerHeight);
      } while (this.isOverlap(newPosition, coinPositions));
      coinPositions.push(newPosition);
      coin.x = newPosition.x;
      coin.y = newPosition.y;
      this.coinContainer.addChild(coin);
    }
    for (let i = 0; i < coin02; i++) {
      const coin = new Sprite(this.assets.gameAssets.coinToss.coin02);
      coin.width = 87;
      coin.height = 87;
      let newPosition;
      do {
        newPosition = this.getRandomPosition(coin.width, coin.height, this.coinContainerWidth, this.coinContainerHeight);
      } while (this.isOverlap(newPosition, coinPositions));
      coinPositions.push(newPosition);
      coin.x = newPosition.x;
      coin.y = newPosition.y;
      this.coinContainer.addChild(coin);
    }
    this.plateContainer?.addChild(this.coinContainer);
  }
  getRandomPosition(coinWidth, coinHeight, containerWidth, containerHeight) {
    const x = Math.random() * (containerWidth - coinWidth);
    const y = Math.random() * (containerHeight - coinHeight);
    return { x, y };
  }
  isOverlap(newPosition, coinPositions) {
    for (const position of coinPositions) {
      if (Math.abs(position.x - newPosition.x) < 87 && Math.abs(position.y - newPosition.y) < 87) {
        return true;
      }
    }
    return false;
  }
  removeCoin() {
    this.coinContainer?.destroy();
    this.coinContainer = null;
  }
  shake() {
    return new Promise((resolve) => {
      this.assets.gameAssets.coinToss.soundPlateShake.play({
        loop: true,
        singleInstance: true
      });
      const originalX = this.plateContainer.position.x;
      const originalY = this.plateContainer.position.y;
      let animationFrameId;
      const updateShake = () => {
        if (!this.plateContainer)
          return;
        this.shakeTime += this.shakeFrequency;
        this.plateContainer.position.x = originalX + Math.sin(this.shakeTime) * this.shakeAmplitude;
        this.plateContainer.position.y = originalY + Math.cos(this.shakeTime) * this.shakeAmplitude;
        animationFrameId = requestAnimationFrame(updateShake);
      };
      updateShake();
      setTimeout(() => {
        cancelAnimationFrame(animationFrameId);
        this.assets.gameAssets.coinToss.soundPlateShake.stop();
        resolve(true);
      }, 1500);
    });
  }
  reset() {
    return new Promise((resolve) => {
      this.assets.gameAssets.coinToss.soundPlateReset.play({
        loop: false,
        singleInstance: true
      });
      const originalX = this.plate01.position.x;
      const originalY = this.plate01.position.y;
      const finalX = this.plate02.x + 26;
      const finalY = this.plate02.y + 20;
      const distanceX = finalX - originalX;
      const distanceY = finalY - originalY;
      const speedX = distanceX / 60;
      const speedY = distanceY / 60;
      const move = () => {
        if (!this.plate01)
          return resolve(true);
        this.plate01.position.x += speedX;
        this.plate01.position.y += speedY;
        if (speedX > 0 && this.plate01.position.x < finalX || speedX < 0 && this.plate01.position.x > finalX || speedY > 0 && this.plate01.position.y < finalY || speedY < 0 && this.plate01.position.y > finalY) {
          requestAnimationFrame(move);
        } else {
          this.plate01.position.x = finalX;
          this.plate01.position.y = finalY;
          resolve(true);
        }
      };
      move();
    });
  }
  reveal() {
    return new Promise((resolve) => {
      this.assets.gameAssets.coinToss.soundPlateReveal.play({
        loop: false,
        singleInstance: true
      });
      const originalX = this.plate01.position.x;
      const originalY = this.plate01.position.y;
      const distanceX = 161 - originalX;
      const distanceY = 0 - originalY;
      const speedX = distanceX / 60;
      const speedY = distanceY / 60;
      const move = () => {
        if (!this.plate01)
          return;
        this.plate01.position.x += speedX;
        this.plate01.position.y += speedY;
        if (speedX > 0 && this.plate01.position.x < 161 || speedX < 0 && this.plate01.position.x > 161 || speedY > 0 && this.plate01.position.y < 0 || speedY < 0 && this.plate01.position.y > 0) {
          requestAnimationFrame(move);
        } else {
          this.plate01.position.x = 161;
          this.plate01.position.y = 0;
          resolve(true);
        }
      };
      move();
    });
  }
  showPlate01() {
    return new Promise((resolve) => {
      const alphaSpeed = 1 / (0.5 * 60);
      const fadeIn = () => {
        if (!this.plate01)
          return;
        this.plate01.alpha += alphaSpeed;
        if (this.plate01.alpha < 1) {
          requestAnimationFrame(fadeIn);
        } else {
          this.plate01.alpha = 1;
          resolve(true);
        }
      };
      fadeIn();
    });
  }
  hidePlate01() {
    return new Promise((resolve) => {
      const alphaSpeed = 1 / (0.5 * 60);
      const fadeOut = () => {
        if (!this.plate01)
          return;
        this.plate01.alpha -= alphaSpeed;
        if (this.plate01.alpha > 0) {
          requestAnimationFrame(fadeOut);
        } else {
          this.plate01.alpha = 0;
          resolve(true);
        }
      };
      fadeOut();
    });
  }
};

// src/app/sic-bo/coin-toss/coin-toss-betting-spots.ts
var SpotArea = {
  "1": {
    top: { x: 300, y: 60 },
    width: 730,
    height: 400
  },
  "2": {
    top: { x: 120, y: 60 },
    width: 680,
    height: 400
  },
  "3": {
    top: { x: 210, y: 60 },
    width: 350,
    height: 280
  },
  "4": {
    top: { x: 110, y: 60 },
    width: 300,
    height: 280
  },
  "5": {
    top: { x: 110, y: 60 },
    width: 300,
    height: 280
  },
  "6": {
    top: { x: 110, y: 60 },
    width: 300,
    height: 280
  },
  "7": {
    top: { x: 110, y: 60 },
    width: 300,
    height: 280
  }
};
var CoinTossBettingSpots = class {
  /*
  Danh sách 7 ô đặt cược
   */
  constructor(container, clickSpotAction) {
    this.container = container;
    this.clickSpotAction = clickSpotAction;
    this.spotsContainer = new Container();
    this.spotsContainerWidth = 2735;
    this.spotsContainerHeight = 925;
    this.assets = CoinTossAssets.getInstance();
    this.spot01Width = 1093;
    this.spot01Height = 497;
    this.spot03Width = 606;
    this.spot03Height = 391;
    this.spot05Width = 455;
    this.textStyle = new TextStyle({
      fontFamily: this.assets.gameAssets.coinToss.notoSerif.family,
      fontSize: 77,
      fill: "#f3e9e9",
      dropShadow: true,
      dropShadowColor: "#f3e9e9",
      dropShadowBlur: 10,
      dropShadowAlpha: 0.8,
      dropShadowDistance: 0,
      dropShadowAngle: 4
      // Góc của shadow
    });
    this.coinSpotSize = 46;
    this.coinSpotPadding = 14;
    this.coinSpotX = 151;
    this.spotEvenOddAnimation = {};
    this.spotsContainer.sortableChildren = true;
    this.spotsContainer.name = CoinTossZIndex.bettingSpot.n;
    this.spotsContainer.zIndex = CoinTossZIndex.bettingSpot.i;
    this.spotsContainer.x = 405;
    this.spotsContainer.y = 591;
    this.spot01 = new Sprite(this.assets.gameAssets.coinToss.bettingSpot0101);
    this.spot01.animationName = "even";
    this.spot01.textureDefault = this.assets.gameAssets.coinToss.bettingSpot0101;
    this.spot01.winTexture = this.assets.gameAssets.coinToss.bettingSpot0102;
    this.spot01.spotWin = this.assets.gameAssets.coinToss.bettingSpot0103;
    this.spot01.zIndex = 10;
    this.spot01.width = this.spot01Width;
    this.spot01.height = this.spot01Height;
    this.spot01.x = 10;
    this.spot01.y = 10;
    this.spot01.name = CoinTossZIndex.bettingSpot.spot.n(1);
    this.spot01.eventMode = "static";
    this.spot01.cursor = "pointer";
    this.spotsContainer?.addChild(this.spot01);
    this.spot01.on("pointerdown", () => {
      clickSpotAction(CoinTossZIndex.bettingSpot.spot1.actionIndex);
    });
    this.spot02 = new Sprite(this.assets.gameAssets.coinToss.bettingSpot0201);
    this.spot02.textureDefault = this.assets.gameAssets.coinToss.bettingSpot0201;
    this.spot02.animationName = "odd";
    this.spot02.winTexture = this.assets.gameAssets.coinToss.bettingSpot0202;
    this.spot02.spotWin = this.assets.gameAssets.coinToss.bettingSpot0203;
    this.spot02.zIndex = 10;
    this.spot02.width = this.spot01Width;
    this.spot02.height = this.spot01Height;
    this.spot02.x = 1628;
    this.spot02.y = 10;
    this.spot02.name = CoinTossZIndex.bettingSpot.spot.n(2);
    this.spot02.eventMode = "static";
    this.spot02.cursor = "pointer";
    this.spotsContainer?.addChild(this.spot02);
    this.spot02.on("pointerdown", () => {
      clickSpotAction(CoinTossZIndex.bettingSpot.spot2.actionIndex);
    });
    this.spot03 = new Sprite(this.assets.gameAssets.coinToss.bettingSpot0301);
    this.spot03.textureDefault = this.assets.gameAssets.coinToss.bettingSpot0301;
    this.spot03.animationName = "fourRed";
    this.spot03.winTexture = this.assets.gameAssets.coinToss.bettingSpot0302;
    this.spot03.spotWin = this.assets.gameAssets.coinToss.bettingSpot0303;
    this.spot03.zIndex = 10;
    this.spot03.width = this.spot03Width;
    this.spot03.height = this.spot03Height;
    this.spot03.x = 5;
    this.spot03.y = 524;
    this.spot03.name = CoinTossZIndex.bettingSpot.spot.n(3);
    this.spot03.eventMode = "static";
    this.spot03.cursor = "pointer";
    this.spotsContainer?.addChild(this.spot03);
    this.spot03.on("pointerdown", () => {
      clickSpotAction(CoinTossZIndex.bettingSpot.spot3.actionIndex);
    });
    this.spot04 = new Sprite(this.assets.gameAssets.coinToss.bettingSpot0401);
    this.spot04.textureDefault = this.assets.gameAssets.coinToss.bettingSpot0401;
    this.spot04.animationName = "fourWhite";
    this.spot04.winTexture = this.assets.gameAssets.coinToss.bettingSpot0402;
    this.spot04.spotWin = this.assets.gameAssets.coinToss.bettingSpot0403;
    this.spot04.zIndex = 10;
    this.spot04.width = this.spot03Width;
    this.spot04.height = this.spot03Height;
    this.spot04.x = 2121;
    this.spot04.y = 524;
    this.spot04.name = CoinTossZIndex.bettingSpot.spot.n(7);
    this.spot04.eventMode = "static";
    this.spot04.cursor = "pointer";
    this.spotsContainer?.addChild(this.spot04);
    this.spot04.on("pointerdown", () => {
      clickSpotAction(CoinTossZIndex.bettingSpot.spot4.actionIndex);
    });
    this.spot05 = new Sprite(this.assets.gameAssets.coinToss.bettingSpot0501);
    this.spot05.textureDefault = this.assets.gameAssets.coinToss.bettingSpot0501;
    this.spot05.animationName = "threeRedOneWhite";
    this.spot05.winTexture = this.assets.gameAssets.coinToss.bettingSpot0502;
    this.spot05.spotWin = this.assets.gameAssets.coinToss.bettingSpot0503;
    this.spot05.zIndex = 10;
    this.spot05.width = this.spot05Width;
    this.spot05.height = this.spot03Height;
    this.spot05.x = 647;
    this.spot05.y = 524;
    this.spot05.name = CoinTossZIndex.bettingSpot.spot.n(4);
    this.spot05.eventMode = "static";
    this.spot05.cursor = "pointer";
    this.spotsContainer?.addChild(this.spot05);
    this.spot05.on("pointerdown", () => {
      clickSpotAction(CoinTossZIndex.bettingSpot.spot5.actionIndex);
    });
    this.spot06 = new Sprite(this.assets.gameAssets.coinToss.bettingSpot0501);
    this.spot06.textureDefault = this.assets.gameAssets.coinToss.bettingSpot0501;
    this.spot06.animationName = "twoRedTwoWhite";
    this.spot06.winTexture = this.assets.gameAssets.coinToss.bettingSpot0502;
    this.spot06.spotWin = this.assets.gameAssets.coinToss.bettingSpot0503;
    this.spot06.zIndex = 10;
    this.spot06.width = this.spot05Width;
    this.spot06.height = this.spot03Height;
    this.spot06.x = 1139;
    this.spot06.y = 524;
    this.spot06.name = CoinTossZIndex.bettingSpot.spot.n(5);
    this.spot06.eventMode = "static";
    this.spot06.cursor = "pointer";
    this.spotsContainer?.addChild(this.spot06);
    this.spot06.on("pointerdown", () => {
      clickSpotAction(CoinTossZIndex.bettingSpot.spot6.actionIndex);
    });
    this.spot07 = new Sprite(this.assets.gameAssets.coinToss.bettingSpot0501);
    this.spot07.textureDefault = this.assets.gameAssets.coinToss.bettingSpot0501;
    this.spot07.animationName = "oneRedThreeWhite";
    this.spot07.winTexture = this.assets.gameAssets.coinToss.bettingSpot0502;
    this.spot07.spotWin = this.assets.gameAssets.coinToss.bettingSpot0503;
    this.spot07.zIndex = 10;
    this.spot07.width = this.spot05Width;
    this.spot07.height = this.spot03Height;
    this.spot07.x = 1628;
    this.spot07.y = 524;
    this.spot07.name = CoinTossZIndex.bettingSpot.spot.n(6);
    this.spot07.eventMode = "static";
    this.spot07.cursor = "pointer";
    this.spotsContainer?.addChild(this.spot07);
    this.spot07.on("pointerdown", () => {
      clickSpotAction(CoinTossZIndex.bettingSpot.spot7.actionIndex);
    });
    this.addCoinToSpot(4, 0, 0);
    this.addCoinToSpot(3, 1, 1);
    this.addCoinToSpot(2, 2, 2);
    this.addCoinToSpot(1, 3, 3);
    this.addCoinToSpot(0, 4, 4);
    this.addTextToTwoSpot("1:14.4", 0);
    this.addTextToTwoSpot("1:3.75", 1);
    this.addTextToTwoSpot("1:2.4", 2);
    this.addTextToTwoSpot("1:3.75", 3);
    this.addTextToTwoSpot("1:14.4", 4);
    this.addTextToOneSpot("1:1.96", 0);
    this.addTextToOneSpot("1:1.96", 1);
    const evenText = new Sprite(this.assets.gameAssets.coinToss.evenText);
    evenText.x = 679 - 555;
    evenText.y = 835 - 685;
    evenText.width = 1055 - 679;
    evenText.height = evenText.width * (59 / 158);
    evenText.zIndex = 20;
    this.spotsContainer?.addChild(evenText);
    const oddText = new Sprite(this.assets.gameAssets.coinToss.oddText);
    oddText.x = 2221 - 555;
    oddText.y = 835 - 685;
    oddText.width = 2365 - 2221;
    oddText.height = oddText.width * (65 / 60);
    oddText.zIndex = 20;
    this.spotsContainer?.addChild(oddText);
    this.container.addChild(this.spotsContainer);
    for (let k = 1; k <= 7; k++) {
      this.drawSpotArea(k);
    }
  }
  drawSpotArea(index) {
    let spotSprite = this.spotsContainer?.getChildByName(
      // 'spot' + index.toString()
      CoinTossZIndex.bettingSpot.spot.n(index)
    );
    if (!spotSprite || !SpotArea[index.toString()])
      return;
    let rectangle = new Graphics();
    rectangle.zIndex = 100;
    rectangle.name = CoinTossZIndex.bettingSpot.spotArea.n(index);
    rectangle.beginFill(9909289, 1e-5);
    rectangle.drawRect(0, 0, SpotArea[index.toString()].width, SpotArea[index.toString()].height);
    rectangle.x = spotSprite.x + SpotArea[index.toString()].top.x;
    rectangle.y = spotSprite.y + SpotArea[index.toString()].top.y;
    this.spotsContainer?.addChild(rectangle);
  }
  addTextToOneSpot(text, index) {
    const textObj = new Text(text, this.textStyle);
    textObj.anchor.set(1, 0);
    textObj.x = index === 0 ? 1050 : 2587;
    textObj.y = 211;
    textObj.zIndex = 50;
    this.spotsContainer?.addChild(textObj);
  }
  addTextToTwoSpot(text, index) {
    const textObj = new Text(text, this.textStyle);
    textObj.anchor.set(1, 0);
    textObj.x = index === 4 ? 2629 : 561 + 489 * index;
    textObj.y = 686;
    textObj.zIndex = 50;
    this.spotsContainer?.addChild(textObj);
  }
  addCoinToSpot(redCoin, whiteCoin, coinIndex = 0) {
    const addCoinToSpot = (coin, i) => {
      coin.width = this.coinSpotSize;
      coin.height = this.coinSpotSize;
      coin.x = coinIndex === 0 ? this.coinSpotX : coinIndex * 491 + this.coinSpotX + this.coinSpotSize;
      coin.y = this.coinSpotPadding * i + this.coinSpotSize * i + 602;
      coin.zIndex = 50;
      this.spotsContainer?.addChild(coin);
    };
    for (let i = 0; i < redCoin; i++) {
      const coin = new Sprite(this.assets.gameAssets.coinToss.coin02);
      addCoinToSpot(coin, i);
    }
    for (let i = 0; i < whiteCoin; i++) {
      const coin = new Sprite(this.assets.gameAssets.coinToss.coin01);
      addCoinToSpot(coin, i + redCoin);
    }
  }
  // addEventToSpot(
  //   spot: Sprite,
  //   winTexture: Texture,
  //   animationName: string,
  //   animationTime = 7000,
  //   spotWin: Texture
  // ) {
  //   spot.eventMode = 'static';
  //   spot.cursor = 'pointer';
  //   const textureDefault = spot.texture;
  //   spot.on('pointerdown', () => {
  //     from(
  //       this.AddSpotWinAnimation(animationName, spot, winTexture, animationTime)
  //     )
  //       .pipe(
  //         tap((_) => (spot.texture = spotWin)),
  //         delay(2000),
  //         tap((_) => (spot.texture = textureDefault))
  //       )
  //       .subscribe((_) => {});
  //   });
  // }
  spotDefault() {
    this.spot01.texture = this.spot01.textureDefault;
    this.spot02.texture = this.spot02.textureDefault;
    this.spot03.texture = this.spot03.textureDefault;
    this.spot04.texture = this.spot04.textureDefault;
    this.spot05.texture = this.spot05.textureDefault;
    this.spot06.texture = this.spot06.textureDefault;
    this.spot07.texture = this.spot07.textureDefault;
  }
  AddSpotWinAnimationV2(spotSprite, animationTime = 7e3) {
    return new Promise((resolve) => {
      if (this.spotEvenOddAnimation[spotSprite.animationName])
        return resolve(true);
      this.spotEvenOddAnimation[spotSprite.animationName] = true;
      const spot02 = new Sprite(spotSprite.winTexture);
      spot02.width = spotSprite.width - 20;
      spot02.height = spotSprite.height - 20;
      spot02.x = spotSprite.x + 10;
      spot02.y = spotSprite.y + 10;
      spot02.zIndex = 1;
      this.spotsContainer?.addChild(spot02);
      from(this.SpotWinAnimation(spotSprite, animationTime)).subscribe((_) => {
        spot02.destroy();
        this.spotsContainer?.removeChild(spot02);
        this.spotEvenOddAnimation[spotSprite.animationName] = false;
        spotSprite.texture = spotSprite.spotWin;
        resolve(true);
      });
    });
  }
  /*
  animationName: tên animation VD: Odd, Even, FourRed, FourWhite, ThreeRedOneWhite, TwoRedTwoWhite, OneRedThreeWhite
  spotSprite: Là Sprite cần sử dụng hiệu ứng
  spot2Texture: Là background của Sprite - Hình thứ 02
   */
  // public AddSpotWinAnimation(
  //   animationName: string,
  //   spotSprite: Sprite,
  //   spot2Texture: Texture,
  //   animationTime = 7000
  // ) {
  //   return new Promise((resolve) => {
  //     if (this.spotEvenOddAnimation[animationName]) return resolve(true);
  //     this.spotEvenOddAnimation[animationName] = true;
  //     const spot02 = new Sprite(spot2Texture);
  //     spot02.width = spotSprite.width - 20;
  //     spot02.height = spotSprite.height - 20;
  //     spot02.x = spotSprite.x + 10;
  //     spot02.y = spotSprite.y + 10;
  //     spot02.zIndex = 1;
  //     this.spotsContainer?.addChild(spot02);
  //     from(this.SpotWinAnimation(spotSprite as any, animationTime)).subscribe(
  //       (_) => {
  //         spot02.destroy();
  //         this.spotsContainer?.removeChild(spot02);
  //         this.spotEvenOddAnimation[animationName] = false;
  //         resolve(true);
  //       }
  //     );
  //   });
  // }
  SpotWinAnimation(spotSprite, animationTime = 7e3) {
    return new Promise((resolve) => {
      if (spotSprite.animation === true)
        return resolve(true);
      spotSprite.animation = true;
      const mask = new Sprite(this.assets.gameAssets.coinToss.spotWinBg);
      const maskSize = Math.max(spotSprite.width, spotSprite.height) * 1.5;
      mask.anchor.x = 0.5;
      mask.anchor.y = 0.5;
      mask.position.x = spotSprite.width / 2 + spotSprite.x;
      mask.position.y = spotSprite.height / 2 + spotSprite.y;
      mask.width = maskSize;
      mask.height = maskSize;
      mask.mask = spotSprite;
      this.spotsContainer?.addChild(mask);
      const rotationSpeed = 2 * Math.PI / 120;
      let animationFrameId;
      const rotate = () => {
        if (!mask)
          return;
        mask.rotation += rotationSpeed;
        animationFrameId = requestAnimationFrame(rotate);
      };
      rotate();
      setTimeout(() => {
        cancelAnimationFrame(animationFrameId);
        mask.mask = null;
        mask.destroy();
        this.spotsContainer?.removeChild(mask);
        spotSprite.animation = false;
        resolve(true);
      }, animationTime);
    });
  }
  destroy() {
    this.spot01?.destroy();
    this.spot01 = null;
    this.spot02?.destroy();
    this.spot02 = null;
    this.spot03?.destroy();
    this.spot03 = null;
    this.spot04?.destroy();
    this.spot04 = null;
    this.spot05?.destroy();
    this.spot05 = null;
    this.spot06?.destroy();
    this.spot06 = null;
    this.spot07?.destroy();
    this.spot07 = null;
    this.spotsContainer?.removeChildren();
    this.spotsContainer?.destroy();
    this.spotsContainer = null;
    this.clickSpotAction = null;
  }
};

// src/app/sic-bo/coin-toss/coin-toss-denomination-o.ts
var assets = CoinTossAssets.getInstance();
var DenominationSize = {
  10: {
    color: "#be7724",
    name: "10",
    index: 0,
    value: 10
  },
  20: {
    color: "#7f31c9",
    name: "20",
    index: 1,
    value: 20
  },
  50: {
    color: "#c63fad",
    name: "50",
    index: 2,
    value: 50
  },
  100: {
    color: "#146bce",
    name: "100",
    index: 3,
    value: 100
  },
  200: {
    color: "#0b9aac",
    name: "200",
    index: 4,
    value: 200
  },
  500: {
    color: "#bd2f18",
    name: "500",
    index: 5,
    value: 500
  },
  1e3: {
    color: "#0c1f34",
    name: "1k",
    index: 6,
    value: 1e3
  },
  2e3: {
    color: "#4b3e0d",
    name: "2k",
    index: 7,
    value: 2e3
  }
};
var CoinTossDenominationO = (color, value, index = 0, valueNumber = 0, width, height, zIndex = 340, showText = true, activeWidth, activeHeight, clickAction) => {
  const denominationTextStyle = new TextStyle({
    fontFamily: assets.gameAssets.coinToss.notoSerifBold.family,
    fontSize: 65,
    fill: ["#d0cecf", "#eeeded", "#f5f5f6", "#c6c6c6"],
    // dropShadow: true, // Bật hiệu ứng shadow
    // dropShadowColor: '#3c3939', // Màu shadow
    // dropShadowBlur: 5, // Độ mờ của shadow
    // dropShadowAlpha: 0.5, // Độ trong suốt của shadow
    // dropShadowDistance: 0, // Khoảng cách của shadow
    dropShadowAngle: 4,
    stroke: "#3c3939",
    strokeThickness: 10
    // Độ đậm của viền chữ
  });
  const denominationContainer = new Container();
  denominationContainer.sortableChildren = true;
  denominationContainer.zIndex = zIndex;
  denominationContainer.name = CoinTossZIndex.denomination.item.n(valueNumber);
  const denominationGraphic = new Graphics();
  denominationGraphic.beginFill(parseInt(color.replace("#", "0x"), 16));
  denominationGraphic.drawRoundedRect(0, 0, width - 14, height - 14, Math.max(width - 14, height - 14) / 2);
  denominationGraphic.position.set(7, 14);
  denominationGraphic.endFill();
  denominationGraphic.zIndex = 1;
  const denomination = new Sprite(assets.gameAssets.coinToss.denominations);
  denomination.zIndex = 2;
  denomination.width = width - 14;
  denomination.height = height - 14;
  denomination.position.set(7, 14);
  denomination.name = CoinTossZIndex.denomination.item.icon.n;
  if (activeWidth && activeHeight) {
    const denominationActive = new Sprite(assets.gameAssets.coinToss.denominationsActive);
    denominationActive.name = CoinTossZIndex.denomination.item.active.n;
    denominationActive.zIndex = 3;
    denominationActive.width = activeWidth;
    denominationActive.height = activeHeight;
    denominationActive.anchor.set(0.5, 0.5);
    denominationActive.position.set(width / 2, height / 2 + 7);
    denominationActive.visible = false;
    denominationContainer.addChild(denominationActive);
  }
  if (showText) {
    const textObj = new Text(value.toString().toUpperCase(), denominationTextStyle);
    textObj.anchor.set(0.5, 0.5);
    textObj.x = width / 2;
    textObj.y = height / 2 + 4;
    textObj.zIndex = 5;
    denominationContainer?.addChild(textObj);
  }
  denominationContainer.addChild(denominationGraphic);
  denominationContainer.addChild(denomination);
  if (clickAction) {
    denominationContainer.eventMode = "dynamic";
    denominationContainer.cursor = "pointer";
    denominationContainer.valueNumber = valueNumber;
    denominationContainer.valueName = value;
    denominationContainer.on("pointerdown", () => {
      clickAction(value);
    });
  }
  denominationContainer.position.set((width + 10) * index, 0);
  return denominationContainer;
};

// src/app/sic-bo/coin-toss/coin-toss-denominations.ts
var CoinTossDenominations = class {
  constructor(container, betting) {
    this.container = container;
    this.betting = betting;
    this.scaleAction = true;
    this.denominationsContainer = new Container();
    this.assets = CoinTossAssets.getInstance();
    this.denominationsSize = {
      width: 1780,
      height: 231,
      padding: 167
    };
    this.denominationsWrapper = new Container();
    this.denominationsMaskWrapper = new Container();
    this.backgroundGraphic = new Graphics();
    this.rightArrow = new Sprite(this.assets.gameAssets.coinToss.denominationRightArrow);
    this.leftArrow = new Sprite(this.assets.gameAssets.coinToss.denominationLeftArrow);
    this.isDragging = false;
    this.prevPointerPos = null;
    this.denominationSize = {
      width: 217,
      height: 217,
      activeWidth: 260,
      denominationRatio: 239 / 223,
      activeScale: 260 / 217,
      activeHeight: 217 * 260 / 217
    };
    this.denominationContainers = {};
    this.animationFrameId = null;
    this.denominationsContainer.zIndex = CoinTossZIndex.denomination.i;
    this.denominationsContainer.name = CoinTossZIndex.denomination.n;
    this.denominationsContainer.x = 881;
    this.denominationsContainer.y = 1541;
    this.backgroundGraphic.y = 52;
    this.backgroundGraphic.beginFill(0, 0.5);
    this.backgroundGraphic.drawRoundedRect(0, 0, this.denominationsSize.width, this.denominationsSize.height, 115.5);
    this.backgroundGraphic.endFill();
    this.backgroundGraphic.zIndex = 310;
    this.denominationsMaskWrapper.sortableChildren = true;
    this.denominationsMaskWrapper.name = CoinTossZIndex.denomination.mask.n;
    this.denominationsMaskWrapper.width = this.denominationsSize.width - this.denominationsSize.padding * 2;
    this.denominationsMaskWrapper.height = this.denominationSize.activeHeight + 30;
    const denominationBackground = new Graphics();
    denominationBackground.beginFill(0, 1);
    denominationBackground.drawRect(0, 0, this.denominationsSize.width - this.denominationsSize.padding * 2, this.denominationSize.activeHeight + 30);
    denominationBackground.position.y = this.denominationsSize.height - this.denominationSize.activeHeight - 30;
    this.denominationsMaskWrapper.mask = denominationBackground;
    this.denominationsMaskWrapper?.addChild(denominationBackground);
    this.denominationsMaskWrapper.position.set(this.denominationsSize.padding, 52);
    this.denominationsMaskWrapper.zIndex = 320;
    this.denominationsWrapper.sortableChildren = true;
    this.denominationsWrapper.name = CoinTossZIndex.denomination.mask.wrapper.n;
    this.denominationsWrapper.width = this.denominationsSize.width - this.denominationsSize.padding * 2;
    this.denominationsWrapper.height = this.denominationSize.activeHeight + 30;
    this.denominationsWrapper.zIndex = 320;
    this.denominationsContainer.addChild(this.backgroundGraphic);
    this.denominationsContainer.width = this.denominationsSize.width;
    this.denominationsContainer.height = this.denominationsSize.height;
    this.denominationsMaskWrapper.addChild(this.denominationsWrapper);
    this.denominationsContainer.addChild(this.denominationsMaskWrapper);
    for (let k in DenominationSize) {
      this.addDenomination(DenominationSize[k].color, DenominationSize[k].name, DenominationSize[k].index, DenominationSize[k].value);
    }
    this.activeContainer("10", false);
    this.leftArrow.width = 98;
    this.leftArrow.height = 98 / (40 / 56);
    this.leftArrow.y = (this.denominationsContainer.height - this.leftArrow.height) / 2 + 25;
    this.leftArrow.x = 40;
    this.leftArrow.eventMode = "dynamic";
    this.rightArrow.width = 98;
    this.rightArrow.height = 98 / (40 / 56);
    this.rightArrow.y = (this.denominationsContainer.height - this.rightArrow.height) / 2 + 25;
    this.rightArrow.x = this.denominationsContainer.width - 130;
    this.rightArrow.eventMode = "dynamic";
    this.rightArrow.on("pointerdown", () => {
      this.moveRight();
    });
    this.leftArrow.on("pointerdown", () => {
      this.moveLeft();
    });
    this.denominationsContainer.addChild(this.rightArrow);
    this.denominationsContainer.addChild(this.leftArrow);
    this.container.addChild(this.denominationsContainer);
    this.denominationsWrapper.eventMode = "dynamic";
    this.denominationsWrapper.on("pointerdown", this.onDragStart.bind(this));
    this.denominationsWrapper.on("pointerup", this.onDragEnd.bind(this));
    this.denominationsWrapper.on("pointerupoutside", this.onDragEnd.bind(this));
    this.denominationsWrapper.on("pointerleave", this.onDragEnd.bind(this));
    this.denominationsWrapper.on("pointermove", this.onDragMove.bind(this));
  }
  onDragStart(event) {
    this.isDragging = true;
    this.prevPointerPos = event.data.getLocalPosition(this.denominationsWrapper);
  }
  onDragEnd() {
    this.isDragging = false;
    this.prevPointerPos = null;
  }
  onDragMove(event) {
    if (!this.isDragging || !this.prevPointerPos)
      return;
    const newPointerPos = event.data.getLocalPosition(this.denominationsWrapper);
    const dx = newPointerPos.x - this.prevPointerPos.x;
    const finalX = this.denominationsWrapper.x + dx;
    if (finalX < 10 && finalX > this.denominationsSize.width - this.denominationsSize.padding * 2 - 40 - this.denominationsWrapper.width) {
      this.denominationsWrapper.x = finalX;
      this.prevPointerPos = newPointerPos;
    }
  }
  moveWrapperLeft() {
    const denominationContainer = this.denominationContainers[Object.keys(this.denominationContainers)[0]];
    const movePx = denominationContainer.width * 1.1;
    const targetX = this.denominationsWrapper.x - movePx;
    const duration = 1e3;
    const startTime = performance.now();
    const animate = (currentTime) => {
      if (!this.denominationsWrapper || !this.denominationsSize)
        return;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const finalX = this.denominationsWrapper.x - targetX * progress;
      if (finalX < 10 && finalX > this.denominationsSize.width - this.denominationsSize.padding * 2 - 40 - this.denominationsWrapper.width) {
        this.denominationsWrapper.x = finalX;
      }
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }
  moveWrapperRight() {
    const denominationContainer = this.denominationContainers[Object.keys(this.denominationContainers)[0]];
    const movePx = denominationContainer.width * 1.1;
    const targetX = this.denominationsWrapper.x - movePx;
    const duration = 1e3;
    const startTime = performance.now();
    const animate = (currentTime) => {
      if (!this.denominationsWrapper || !this.denominationsSize)
        return;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const finalX = this.denominationsWrapper.x - targetX * progress * -1;
      if (finalX < 10 && finalX > this.denominationsSize.width - this.denominationsSize.padding * 2 - 40 - this.denominationsWrapper.width) {
        this.denominationsWrapper.x = finalX;
      }
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }
  getActive() {
    for (const key in this.denominationContainers) {
      if (this.denominationContainers[key].active) {
        return this.denominationContainers[key];
      }
    }
    return null;
  }
  moveRight() {
    let denominationContainer = this.getActive();
    if (!!denominationContainer) {
      const valueNumber = denominationContainer.valueNumber;
      let nextValue = 0;
      let valueName = null;
      for (const key in this.denominationContainers) {
        if (this.denominationContainers[key].valueNumber > valueNumber && (this.denominationContainers[key].valueNumber <= nextValue || !nextValue)) {
          nextValue = this.denominationContainers[key].valueNumber;
          valueName = this.denominationContainers[key].valueName;
        }
      }
      if (valueName) {
        this.activeContainer(valueName);
      }
    }
  }
  moveLeft() {
    let denominationContainer = this.getActive();
    if (!!denominationContainer) {
      const valueNumber = denominationContainer.valueNumber;
      let nextValue = 0;
      let valueName = null;
      for (const key in this.denominationContainers) {
        if (this.denominationContainers[key].valueNumber < valueNumber && (this.denominationContainers[key].valueNumber >= nextValue || !nextValue)) {
          nextValue = this.denominationContainers[key].valueNumber;
          valueName = this.denominationContainers[key].valueName;
        }
      }
      if (valueName) {
        this.activeContainer(valueName);
      }
    }
  }
  removeRotateAnimate() {
    if (this.animationFrameId)
      try {
        cancelAnimationFrame(this.animationFrameId);
      } catch (error) {
      }
  }
  disableDenomination() {
    for (const key in this.denominationContainers) {
      if (this.denominationContainers[key].active) {
        this.denominationContainers[key].active = false;
        this.denominationContainers[key].zIndex = 340;
        let scaleRemove = this.denominationContainers[key].scale.x;
        const animateRemove = () => {
          if (!this.denominationContainers || !this.denominationContainers[key] || !this.denominationSize)
            return;
          if (scaleRemove > 1) {
            scaleRemove -= 0.02;
            this.denominationContainers[key].scale.set(scaleRemove, scaleRemove);
            const height = this.denominationSize.activeHeight * scaleRemove;
            this.denominationContainers[key].y = this.denominationSize.activeHeight - height;
            requestAnimationFrame(animateRemove);
          } else {
            this.denominationContainers[key].getChildByName("denominationActive").visible = false;
          }
        };
        if (this.scaleAction)
          animateRemove();
      }
    }
  }
  checkDisableArrow(value) {
    const denominationContainer = this.denominationContainers[value];
    const valueNumber = denominationContainer.valueNumber;
    let leftDisable = true;
    let rightDisable = true;
    for (const key in this.denominationContainers) {
      if (this.denominationContainers[key].valueNumber < valueNumber) {
        leftDisable = false;
      }
      if (this.denominationContainers[key].valueNumber > valueNumber) {
        rightDisable = false;
      }
    }
    if (leftDisable) {
      this.leftArrow.texture = this.assets.gameAssets.coinToss.denominationLeftArrowD;
      this.leftArrow.cursor = "not-allowed";
    } else {
      this.leftArrow.texture = this.assets.gameAssets.coinToss.denominationLeftArrow;
      this.leftArrow.cursor = "pointer";
    }
    if (rightDisable) {
      this.rightArrow.texture = this.assets.gameAssets.coinToss.denominationRightArrowD;
      this.rightArrow.cursor = "not-allowed";
    } else {
      this.rightArrow.texture = this.assets.gameAssets.coinToss.denominationRightArrow;
      this.rightArrow.cursor = "pointer";
    }
  }
  activeContainer(value, sound2 = true) {
    if (this.denominationContainers[value].active)
      return;
    if (sound2)
      this.assets.gameAssets.coinToss.soundDenominationNext.play({
        loop: false,
        singleInstance: true
      });
    this.disableDenomination();
    this.removeRotateAnimate();
    this.checkDisableArrow(value);
    const denominationContainer = this.denominationContainers[value];
    this.betting(denominationContainer.valueNumber);
    if (this.denominationsWrapper.x * -1 > denominationContainer.x) {
      this.moveWrapperLeft();
    } else if (denominationContainer.width + denominationContainer.x + this.denominationsWrapper.x > this.denominationsSize.width - this.denominationsSize.padding * 2) {
      this.moveWrapperRight();
    }
    denominationContainer.active = true;
    denominationContainer.zIndex = 341;
    let denominationActive = denominationContainer.getChildByName("denominationActive");
    denominationActive.visible = true;
    let scale = 1;
    let y = denominationContainer.y;
    const scaleStep = 0.02;
    const targetScale = 1.2;
    const animate = () => {
      if (!denominationActive || !this.denominationSize)
        return;
      if (denominationActive.rotation >= 360)
        denominationActive.rotation = 0;
      else
        denominationActive.rotation += 0.15;
      if (scale < targetScale && this.scaleAction) {
        scale += scaleStep;
        denominationContainer.scale.set(scale, scale);
        const height = this.denominationSize.height * scale;
        denominationContainer.y = this.denominationSize.height - height;
      }
      this.animationFrameId = requestAnimationFrame(animate);
    };
    if (this.scaleAction)
      animate();
  }
  addDenomination(color, value, index = 0, valueNumber = 0) {
    const denominationContainer = CoinTossDenominationO(color, value, index, valueNumber, this.denominationSize.width, this.denominationSize.height, 340, true, this.denominationSize.activeWidth, this.denominationSize.activeHeight, (value2) => {
      this.activeContainer(value2);
    });
    this.denominationContainers[value] = denominationContainer;
    this.denominationsWrapper?.addChild(denominationContainer);
  }
  destroy() {
    this.denominationsContainer?.destroy();
    this.denominationsContainer = null;
    this.denominationsMaskWrapper?.destroy();
    this.denominationsMaskWrapper = null;
    this.denominationsWrapper?.destroy();
    this.denominationsWrapper = null;
  }
};

// node_modules/uuid/dist/esm-browser/rng.js
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  if (!getRandomValues) {
    getRandomValues = typeof crypto !== "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);
    if (!getRandomValues) {
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    }
  }
  return getRandomValues(rnds8);
}

// node_modules/uuid/dist/esm-browser/stringify.js
var byteToHex = [];
for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 256).toString(16).slice(1));
}
function unsafeStringify(arr, offset = 0) {
  return byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]];
}

// node_modules/uuid/dist/esm-browser/native.js
var randomUUID = typeof crypto !== "undefined" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
var native_default = {
  randomUUID
};

// node_modules/uuid/dist/esm-browser/v4.js
function v4(options, buf, offset) {
  if (native_default.randomUUID && !buf && !options) {
    return native_default.randomUUID();
  }
  options = options || {};
  const rnds = options.random || (options.rng || rng)();
  rnds[6] = rnds[6] & 15 | 64;
  rnds[8] = rnds[8] & 63 | 128;
  if (buf) {
    offset = offset || 0;
    for (let i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }
    return buf;
  }
  return unsafeStringify(rnds);
}
var v4_default = v4;

// src/app/sic-bo/coin-toss/coin-toss-history.ts
var _CoinTossHistory = class _CoinTossHistory {
  static addHistory(history) {
    if (Array.isArray(history)) {
      _CoinTossHistory.history.push(...history);
      if (_CoinTossHistory.history.length >= _CoinTossHistory.maxHistory) {
        _CoinTossHistory.history.splice(0, _CoinTossHistory.history.length - _CoinTossHistory.maxHistory);
      }
    } else {
      _CoinTossHistory.history.push(history);
      if (_CoinTossHistory.history.length >= _CoinTossHistory.maxHistory) {
        _CoinTossHistory.history.shift();
      }
    }
    _CoinTossHistory.history$.next(_CoinTossHistory.history);
    _CoinTossHistory.iniPercent();
    _CoinTossHistory.iniBoard();
  }
  static iniBoard() {
    const boardArray = [];
    const boardPresent = [];
    _CoinTossHistory.history.forEach((history) => {
      if (boardPresent.length) {
        if (boardPresent[boardPresent.length - 1].isWhite !== history.whiteIcon) {
          boardArray.push(JSON.parse(JSON.stringify(boardPresent)));
          boardPresent.splice(0, boardPresent.length);
        }
      }
      boardPresent.push({ isWhite: history.whiteIcon, red: history.red });
      if (boardPresent.length === 6) {
        boardArray.push(JSON.parse(JSON.stringify(boardPresent)));
        boardPresent.splice(0, boardPresent.length);
      }
    });
    if (boardPresent.length)
      boardArray.push(boardPresent);
    if (boardArray.length > 15) {
      boardArray.splice(0, boardArray.length - 15);
    }
    this.historyBoard$.next(boardArray);
  }
  static iniPercent() {
    const total = {
      even: 0,
      fourRed: 0,
      fourWhite: 0,
      twoRedTwoWhite: 0,
      odd: 0,
      threeRedOneWhite: 0,
      oneRedThreeWhite: 0
    };
    _CoinTossHistory.history.forEach((history) => {
      if (history.whiteIcon)
        total.even++;
      else
        total.odd++;
      if (history.red === 4)
        total.fourRed++;
      else if (history.red === 0)
        total.fourWhite++;
      else if (history.red === 2)
        total.twoRedTwoWhite++;
      else if (history.red === 3)
        total.threeRedOneWhite++;
      else if (history.red === 1)
        total.oneRedThreeWhite++;
    });
    const percent = {
      even: Math.floor(total.even / _CoinTossHistory.history.length * 100),
      fourRed: Math.floor(total.fourRed / _CoinTossHistory.history.length * 100),
      fourWhite: Math.floor(total.fourWhite / _CoinTossHistory.history.length * 100),
      twoRedTwoWhite: Math.floor(total.twoRedTwoWhite / _CoinTossHistory.history.length * 100),
      odd: Math.ceil(total.odd / _CoinTossHistory.history.length * 100),
      threeRedOneWhite: Math.ceil(total.threeRedOneWhite / _CoinTossHistory.history.length * 100),
      oneRedThreeWhite: Math.ceil(total.oneRedThreeWhite / _CoinTossHistory.history.length * 100)
    };
    _CoinTossHistory.historyPercent$.next(percent);
  }
  static randomHistory() {
    for (let i = 0; i < 500; i++) {
      _CoinTossHistory.addRandomHistory();
    }
  }
  static addRandomHistory(timeOut = 0) {
    const red = _CoinTossHistory.randomRed();
    const whiteIcon = red !== 3 && red !== 1;
    let history = {
      red,
      white: 4 - red,
      whiteIcon,
      id: v4_default(),
      createAt: (/* @__PURE__ */ new Date()).toISOString()
    };
    setTimeout(() => {
      _CoinTossHistory.addHistory(history);
    }, timeOut);
    return red;
  }
};
_CoinTossHistory.history = [];
_CoinTossHistory.history$ = new ReplaySubject(1);
_CoinTossHistory.historyPercent$ = new ReplaySubject(1);
_CoinTossHistory.historyBoard$ = new ReplaySubject(1);
_CoinTossHistory.maxHistory = 1e3;
_CoinTossHistory.randomRed = () => {
  let red = 0;
  for (let i = 0; i < 4; i++) {
    if (Math.random() > 0.5)
      red++;
  }
  return red;
};
var CoinTossHistory = _CoinTossHistory;

// src/app/sic-bo/coin-toss/coin-toss-table-history.ts
var CoinTossTableHistory = class {
  constructor(container) {
    this.container = container;
    this.historyContainer = new Container();
    this.backgroundGraphic = new Graphics();
    this.evenContainer = new Container();
    this.oddContainer = new Container();
    this.assets = CoinTossAssets.getInstance();
    this.tableWidth = 1467;
    this.tablePadding = 18;
    this.coinPadding = 3;
    this.maxCoin = 30;
    this.coinWidth = (this.tableWidth - this.coinPadding * this.maxCoin - this.tablePadding * 2) / this.maxCoin;
    this.textStyle = new TextStyle({
      fontFamily: this.assets.gameAssets.coinToss.notoSerif.family,
      fontSize: 30,
      fill: "#f9f5f3",
      dropShadow: true,
      dropShadowColor: "#1b181a",
      dropShadowBlur: 10,
      dropShadowAlpha: 0.8,
      dropShadowDistance: 0,
      dropShadowAngle: 4,
      stroke: "#1b181a",
      strokeThickness: 2
      // Độ đậm của viền chữ
    });
    this.isDestroy = false;
    this.startTime = null;
    this.historyContainer.sortableChildren = true;
    this.backgroundGraphic.zIndex = 1;
    this.historyContainer.zIndex = CoinTossZIndex.tableHistory.i;
    this.historyContainer.y = 1524;
    this.historyContainer.x = 1040;
    this.backgroundGraphic.beginFill(3343617, 0.5);
    this.backgroundGraphic.drawRoundedRect(0, 0, 1467, 53, 27);
    this.backgroundGraphic.endFill();
    this.historyContainer?.addChild(this.backgroundGraphic);
    this.container.addChild(this.historyContainer);
    this.drawMessageShape();
    this.animationLastCoin();
    this.historySubscription = CoinTossHistory.history$.subscribe((history) => {
      const listHistory = history.slice(-30);
      listHistory.forEach((item) => {
        const historyExists = this.historyContainer?.getChildByName(item.id);
        if (!historyExists) {
          this.addHistory(item.red, item.white, item.id);
        }
      });
    });
  }
  drawMessageShape() {
    this.messageShape = new Graphics();
    this.messageShape.beginFill(65536);
    this.messageShape.drawRoundedRect(0, 0, 315, 80, 15);
    const canvas = document.createElement("canvas");
    canvas.width = 1;
    canvas.height = 100;
    const ctx = canvas.getContext("2d");
    const grd = ctx.createLinearGradient(0, 0, 0, 100);
    grd.addColorStop(0, "#905038");
    grd.addColorStop(0.4, "#fdff6c");
    grd.addColorStop(0.5, "#f3fb66");
    grd.addColorStop(0.6, "#c4cb56");
    grd.addColorStop(1, "#feff6d");
    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, 1, 100);
    const gradientTexture = Texture.from(canvas);
    this.messageShape.lineStyle({
      width: 5,
      color: 16711532,
      texture: gradientTexture
    });
    this.messageShape.drawRoundedRect(0, 0, 315, 80, 15);
    this.messageShape.endFill();
    this.messageShape.beginFill(65536);
    this.messageShape.drawPolygon([
      315 / 2,
      110,
      315 / 2 - 35,
      80,
      315 / 2 + 35,
      80
    ]);
    this.messageShape.lineStyle({
      width: 5,
      color: 16711532,
      texture: gradientTexture
    });
    this.messageShape.endFill();
    this.messageShape.lineStyle(5, 65536);
    this.messageShape.moveTo(315 / 2 - 29, 80);
    this.messageShape.lineTo(315 / 2 + 29, 80);
    this.messageShape.endFill();
    this.messageContainer = new Container();
    this.messageContainer.addChild(this.messageShape);
    const textIDData = new Text("#1234567", this.textStyle);
    textIDData.name = "textIDData";
    textIDData.anchor.set(0.5, 0);
    textIDData.x = this.messageContainer.width / 2;
    textIDData.y = 0;
    this.messageContainer?.addChild(textIDData);
    const oddEvenData = new Text("CH\u0102\u0303N", this.textStyle);
    oddEvenData.name = "oddEvenData";
    oddEvenData.anchor.set(0, 0);
    oddEvenData.x = 30;
    oddEvenData.y = 40;
    this.messageContainer?.addChild(oddEvenData);
    const oddText = new Text("0", this.textStyle);
    oddText.name = "oddText";
    oddText.anchor.set(0, 0);
    oddText.x = 210;
    oddText.y = 40;
    this.messageContainer?.addChild(oddText);
    const evenText = new Text("0", this.textStyle);
    evenText.name = "evenText";
    evenText.anchor.set(0, 0);
    evenText.x = 280;
    evenText.y = 40;
    this.messageContainer?.addChild(evenText);
    const coinOdd = new Sprite(this.assets.gameAssets.coinToss.coin02);
    coinOdd.width = 37;
    coinOdd.height = 37;
    coinOdd.y = 40;
    coinOdd.x = 170;
    this.messageContainer?.addChild(coinOdd);
    const coinEven = new Sprite(this.assets.gameAssets.coinToss.coin01);
    coinEven.width = 37;
    coinEven.height = 37;
    coinEven.y = 40;
    coinEven.x = 240;
    this.messageContainer?.addChild(coinEven);
    this.coinAnimationBorder = new Graphics();
    this.coinAnimationBorder.lineStyle({
      width: 5,
      color: 16711532,
      texture: gradientTexture
    });
    this.coinAnimationBorder.drawCircle(0, 0, this.coinWidth / 2);
    this.coinAnimationBorder.name = "coinAnimationBorder";
    this.coinAnimationBorder.zIndex = 510;
    this.coinAnimationBorder.visible = false;
    this.historyContainer?.addChild(this.coinAnimationBorder);
    this.messageContainer.visible = false;
    this.historyContainer?.addChild(this.messageContainer);
  }
  showCoinInfo(coinItem) {
    this.messageContainer.getChildByName("textIDData").text = ("#" + coinItem.coinId).toUpperCase();
    this.messageContainer.getChildByName("oddEvenData").text = coinItem.isRed ? "LE\u0309" : "CH\u0102\u0303N";
    this.messageContainer.getChildByName("oddText").text = coinItem.red.toString();
    this.messageContainer.getChildByName("evenText").text = coinItem.white.toString();
    this.messageContainer.visible = true;
    this.messageContainer.x = coinItem.x + coinItem.width / 2 - this.messageShape.width / 2;
    this.messageContainer.y = coinItem.y - this.messageShape.height;
  }
  hideCoinInfo() {
    this.messageContainer.visible = false;
  }
  removeFirstCoin() {
    if (!this.historyContainer?.children || !this.historyContainer?.children.length)
      return;
    const isCoin = this.historyContainer?.children.filter((item) => item.isCoin);
    if (!isCoin || !isCoin.length)
      return;
    const coinRemove = isCoin.reduce((prev, curr) => prev.coinIndex < curr.coinIndex ? prev : curr);
    this.historyContainer?.removeChild(coinRemove);
    coinRemove?.destroy();
    let startTime;
    this.historyContainer?.children.filter((item) => item.isCoin).forEach((item) => {
      item.coinIndex -= 1;
      item.y = 4;
    });
    const beforeMoveX = [];
    const moveCoins = (timestamp) => {
      if (!this.historyContainer)
        return;
      if (!startTime)
        startTime = timestamp;
      const progress = (timestamp - startTime) / 500;
      this.historyContainer?.children.filter((item) => item.isCoin).forEach((item, index) => {
        const coin = item;
        if (coin && coin.isCoin) {
          if (!beforeMoveX[index]) {
            beforeMoveX?.push(this.tablePadding + (this.coinPadding + this.coinWidth) * (coin.coinIndex + 1));
          }
          coin.x = beforeMoveX[index] - (this.coinWidth + this.coinPadding) * progress;
        }
      });
      if (progress < 1) {
        requestAnimationFrame(moveCoins);
      }
    };
    requestAnimationFrame(moveCoins);
  }
  addHistory(red, white, id) {
    const whiteIcon = red !== 3 && red !== 1;
    const coinItem = new Sprite(this.assets.gameAssets.coinToss[whiteIcon ? "coin01" : "coin02"]);
    coinItem.isCoin = true;
    coinItem.coinIndex = this.totalCoin() || 0;
    coinItem.isRed = !whiteIcon;
    coinItem.name = id;
    coinItem.red = red;
    coinItem.white = white;
    coinItem.coinId = Math.random().toString(36).substring(2, 8);
    if (coinItem.coinIndex + 1 > this.maxCoin) {
      this.removeFirstCoin();
      coinItem.coinIndex -= 1;
    }
    coinItem.width = this.coinWidth;
    coinItem.height = this.coinWidth;
    coinItem.x = this.tablePadding + (this.coinPadding + this.coinWidth) * coinItem.coinIndex;
    coinItem.y = 4;
    coinItem.zIndex = 2;
    coinItem.cursor = "pointer";
    coinItem.eventMode = "dynamic";
    coinItem.on("pointerenter", () => {
      this.showCoinInfo(coinItem);
    });
    coinItem.on("pointerout", () => {
      this.hideCoinInfo();
    });
    this.historyContainer?.addChild(coinItem);
  }
  totalCoin() {
    return this.historyContainer?.children.filter((item) => item.isCoin).length;
  }
  animationLastCoin() {
    if (!this.historyContainer || !this.coinAnimationBorder)
      return;
    if (!this.isDestroy) {
      const isCoin = this.historyContainer?.children.filter((item) => item.isCoin);
      if (!isCoin || !isCoin.length) {
        this.lastCoinAnimationId = requestAnimationFrame(this.animationLastCoin.bind(this));
        return;
      }
      const coinAnimation = isCoin.reduce((prev, curr) => prev.coinIndex > curr.coinIndex ? prev : curr);
      if (!coinAnimation) {
        this.lastCoinAnimationId = requestAnimationFrame(this.animationLastCoin.bind(this));
      } else {
        this.coinAnimationBorder.visible = true;
        this.coinAnimationBorder.x = coinAnimation.x + coinAnimation.width / 2;
        this.coinAnimationBorder.y = coinAnimation.y + coinAnimation.height / 2;
        if (!this.startTime)
          this.startTime = performance.now();
        const bounceValue = Math.sin((performance.now() - this.startTime) / 150) * 10;
        coinAnimation.y = 4 + bounceValue;
        this.coinAnimationBorder.y = coinAnimation.y + coinAnimation.height / 2;
        this.lastCoinAnimationId = requestAnimationFrame(this.animationLastCoin.bind(this));
      }
    }
  }
  destroy() {
    this.isDestroy = true;
    this.backgroundGraphic?.destroy();
    this.backgroundGraphic = null;
    this.historyContainer?.destroy();
    this.historyContainer = null;
    this.evenContainer?.destroy();
    this.evenContainer = null;
    this.oddContainer?.destroy();
    this.oddContainer = null;
    this.messageShape?.destroy();
    this.messageShape = null;
    this.messageContainer?.destroy();
    this.messageContainer = null;
    this.coinAnimationBorder?.destroy();
    this.coinAnimationBorder = null;
    this.historySubscription?.unsubscribe();
    if (this.lastCoinAnimationId) {
      cancelAnimationFrame(this.lastCoinAnimationId);
    }
  }
};

// src/app/sic-bo/coin-toss/coin-toss-player-o.ts
var PlayerPosition = {
  "0": {
    x: 481,
    y: 1548
  },
  "1": {
    x: 732,
    y: 219
  },
  "2": {
    x: 242,
    y: 470
  },
  "3": {
    x: 103,
    y: 856
  },
  "4": {
    x: 197,
    y: 1317
  },
  "5": {
    x: 3220,
    y: 734
  },
  "6": {
    x: 3193,
    y: 1210
  }
};
var CoinTossPlayerO = class {
  set position(pos) {
    this._position = pos;
    this.myPlayerContainer.playerPosition = pos;
  }
  get position() {
    return this._position;
  }
  constructor(player) {
    this.player = player;
    this.myPlayerContainer = new Container();
    this._position = -1;
    this.assets = CoinTossAssets.getInstance();
    this.avatarContainer = new Container();
    this.textStylePlayerMainName = new TextStyle({
      fontFamily: this.assets.gameAssets.coinToss.notoSerif.family,
      fontSize: 37,
      fill: ["#fffcea", "#fffadb", "#fff7ca"],
      dropShadow: true,
      // dropShadowColor: '#654d3c', // Màu shadow
      // dropShadowBlur: 10, // Độ mờ của shadow
      // dropShadowAlpha: 0.8, // Độ trong suốt của shadow
      // dropShadowDistance: 0, // Khoảng cách của shadow
      // dropShadowAngle: 4, // Góc của shadow
      stroke: "#654d3c",
      strokeThickness: 7
      // Độ đậm của viền chữ
    });
    this.textStylePlayerName = new TextStyle({
      fontFamily: this.assets.gameAssets.coinToss.notoSerifBold.family,
      fontSize: 33,
      fill: "#ffffff",
      dropShadow: true,
      dropShadowColor: "#433531",
      dropShadowBlur: 10,
      dropShadowAlpha: 0.8,
      dropShadowDistance: 0,
      dropShadowAngle: 4,
      stroke: "#433531",
      strokeThickness: 2
      // Độ đậm của viền chữ
    });
    this.textStylePlayerBalance = new TextStyle({
      fontFamily: this.assets.gameAssets.coinToss.notoSerifBold.family,
      fontSize: 45,
      fill: "#fcf27d",
      dropShadow: true,
      dropShadowColor: "#a08e56",
      dropShadowBlur: 5,
      dropShadowAlpha: 0.8,
      dropShadowDistance: 0,
      dropShadowAngle: 0,
      stroke: "#fcf27d",
      strokeThickness: 1
      // Độ đậm của viền chữ
    });
    this.avatarContainer.sortableChildren = true;
    this.myPlayerContainer.isMain = player.isMain;
    this.myPlayerContainer.name = player.id;
    this.myPlayerContainer.playerPosition = -1;
    this.myPlayerContainer.sortableChildren = true;
    this.avatar = new Sprite(Texture.from(this.assets.assetsImg + "avatar/" + player.avatar));
    this.avatar.name = CoinTossZIndex.player.o.avatar.n;
    this.myPlayerContainer.visible = false;
    this.myPlayerContainer.alpha = 0;
    if (player.isMain)
      this.mainSize();
    else
      this.playerSize();
    this.avatar.zIndex = 10;
    this.avatarContainer.name = CoinTossZIndex.player.o.avatar.container.n;
    this.avatarContainer.addChild(this.avatar);
    this.avatarContainer.addChild(this.avatarBorder);
    this.myPlayerContainer.addChild(this.avatarContainer);
  }
  /*
   * fadeInMyPlayerContainer(position: number = 0)
   * position: 0: main, 1 -> 6 là member
   */
  fadeInMyPlayerContainer(position = 0) {
    this.myPlayerContainer.visible = true;
    return new Promise((resolve) => {
      if (this.myPlayerContainer.alpha === 1)
        return resolve(true);
      if (position < 0 || position > 6)
        return resolve(true);
      this.position = position;
      const { x, y } = PlayerPosition[this.position.toString()];
      this.myPlayerContainer.y = y;
      this.myPlayerContainer.x = x;
      let elapsed = 0;
      const duration = 1e3;
      const stepTime = 50;
      const fadeOutInterval = setInterval(() => {
        if (!this.myPlayerContainer)
          return clearInterval(fadeOutInterval);
        elapsed += stepTime;
        this.myPlayerContainer.alpha = 0 + elapsed / duration;
        if (elapsed >= duration) {
          this.myPlayerContainer.alpha = 1;
          clearInterval(fadeOutInterval);
          resolve(true);
        }
      }, stepTime);
    });
  }
  fadeOutMyPlayerContainer() {
    return new Promise((resolve) => {
      if (this.myPlayerContainer.alpha === 0)
        return resolve(true);
      let elapsed = 0;
      const duration = 1e3;
      const stepTime = 50;
      const fadeOutInterval = setInterval(() => {
        if (!this.myPlayerContainer)
          return clearInterval(fadeOutInterval);
        elapsed += stepTime;
        this.myPlayerContainer.alpha = 1 - elapsed / duration;
        if (elapsed >= duration) {
          this.myPlayerContainer.alpha = 0;
          this.myPlayerContainer.visible = false;
          clearInterval(fadeOutInterval);
          this.position = -1;
          resolve(true);
        }
      }, stepTime);
    });
  }
  mainSize() {
    this.myPlayerContainer.y = 1548;
    this.myPlayerContainer.x = 481;
    this.fadeInMyPlayerContainer().then();
    this.avatarBorder = new Sprite(this.assets.gameAssets.coinToss.avatarBorder02);
    this.avatarBorder.zIndex = 20;
    this.avatar.width = 234;
    this.avatar.height = 234;
    this.avatarBorder.width = 274;
    this.avatarBorder.height = 274;
    this.avatarBorder.x = 50;
    this.avatar.x = 70;
    this.avatar.y = 20;
    let displayName = this.player.name;
    displayName = displayName.charAt(0).toUpperCase() + displayName.slice(1);
    const playerName = new Text(displayName, this.textStylePlayerMainName);
    playerName.zIndex = 40;
    playerName.anchor.set(0.5, 0);
    playerName.x = 370 / 2;
    playerName.y = this.avatarBorder.height - 50 - 24;
    this.myPlayerContainer?.addChild(playerName);
    const rectangle = new Graphics();
    rectangle.beginFill(0, 0.4);
    rectangle.drawRoundedRect(0, 0, playerName.width + 70, 50, 25);
    rectangle.endFill();
    rectangle.zIndex = 30;
    rectangle.x = (370 - (playerName.width + 70)) / 2;
    rectangle.y = this.avatarBorder.height - 50 - 24;
    this.myPlayerContainer.addChild(rectangle);
    const balanceBackground = new Graphics();
    balanceBackground.beginFill(2170404);
    balanceBackground.drawRoundedRect(0, 0, 370, 80, 15);
    const canvas = document.createElement("canvas");
    canvas.width = 1;
    canvas.height = 80;
    const ctx = canvas.getContext("2d");
    const grd = ctx.createLinearGradient(0, 0, 0, 100);
    grd.addColorStop(0, "#fff3ca");
    grd.addColorStop(0.1, "#c59155");
    grd.addColorStop(0.4, "#fbe9bd");
    grd.addColorStop(0.5, "#fff0b7");
    grd.addColorStop(0.7, "#61493c");
    grd.addColorStop(1, "#fae6af");
    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, 1, 100);
    const gradientTexture = Texture.from(canvas);
    balanceBackground.lineStyle({
      width: 5,
      color: 16443055,
      texture: gradientTexture
    });
    balanceBackground.drawRoundedRect(0, 0, 370, 80, 15);
    balanceBackground.endFill();
    balanceBackground.name = CoinTossZIndex.player.o.balance.background.n;
    balanceBackground.zIndex = 50;
    balanceBackground.y = rectangle.y + rectangle.height;
    this.myPlayerContainer?.addChild(balanceBackground);
    let balanceDisplay;
    if (Number.isInteger(this.player.balance)) {
      balanceDisplay = this.player.balance.toLocaleString();
    } else {
      balanceDisplay = parseFloat(this.player.balance.toFixed(2)).toLocaleString();
    }
    const balanceText = new Text(balanceDisplay, this.textStylePlayerBalance);
    balanceText.zIndex = 60;
    balanceText.anchor.set(0.5, 0);
    balanceText.x = balanceBackground.width / 2;
    balanceText.y = balanceBackground.y + 15;
    this.myPlayerContainer?.addChild(balanceText);
  }
  playerSize() {
    this.myPlayerContainer.y = 500;
    this.avatarBorder = new Sprite(this.assets.gameAssets.coinToss.avatarBorder01);
    this.avatarBorder.zIndex = 20;
    this.avatarBorder.width = 216;
    this.avatarBorder.height = 216;
    this.avatar.width = 200;
    this.avatar.height = 200;
    this.avatar.y = 8;
    this.avatar.x = 8;
    const rectangle = new Graphics();
    rectangle.beginFill(0, 0.4);
    rectangle.drawRoundedRect(0, 0, 200, 40, 10);
    rectangle.endFill();
    rectangle.zIndex = 30;
    rectangle.x = 17;
    rectangle.y = 176;
    this.myPlayerContainer.addChild(rectangle);
    let displayName = this.player.name;
    displayName = displayName.charAt(0).toUpperCase() + displayName.slice(1);
    if (displayName.length > 7) {
      displayName = displayName.slice(0, 7) + "...";
    }
    const playerName = new Text(displayName, this.textStylePlayerName);
    playerName.zIndex = 40;
    playerName.anchor.set(0.5, 0);
    playerName.x = 217 / 2;
    playerName.y = rectangle.y - 2;
    this.myPlayerContainer?.addChild(playerName);
    const balanceBackground = new Sprite(this.assets.gameAssets.coinToss.balance01);
    balanceBackground.zIndex = 50;
    balanceBackground.width = this.avatarBorder.width;
    balanceBackground.height = 70;
    balanceBackground.y = playerName.y + playerName.height;
    this.myPlayerContainer?.addChild(balanceBackground);
    let balanceDisplay;
    if (this.player.balance > 9999) {
      balanceDisplay = "9,999+";
    } else if (Number.isInteger(this.player.balance)) {
      balanceDisplay = this.player.balance.toLocaleString();
    } else {
      balanceDisplay = parseFloat(this.player.balance.toFixed(2)).toLocaleString();
    }
    const balanceText = new Text(balanceDisplay, this.textStylePlayerBalance);
    balanceText.zIndex = 60;
    balanceText.anchor.set(0.5, 0);
    balanceBackground.name = CoinTossZIndex.player.o.balance.background.n;
    balanceText.x = balanceBackground.width / 2;
    balanceText.y = balanceBackground.y + 8;
    this.myPlayerContainer?.addChild(balanceText);
  }
  destroy() {
    this.avatar?.destroy();
    this.avatar = null;
    this.avatarBorder?.destroy();
    this.avatarBorder = null;
    this.avatarContainer?.destroy();
    this.avatarContainer = null;
    this.myPlayerContainer?.destroy();
    this.myPlayerContainer = null;
  }
};

// src/app/sic-bo/coin-toss/coin-toss-player-avatar.ts
var avatarList = [
  "1cf504b8-693f-43a9-a15a-c49462035b39.88351.png",
  "03e1be8a-3170-41aa-881c-8b194120c38a.16760.png",
  "4d977f86-c287-4ec8-83f4-1471e71ab76e.d1ec3.png",
  "4db02126-ef26-4ff0-92c5-14f34b2f6263.70bca.png",
  "5fe62372-9276-400c-99f2-f496eee3ba2d.77b09.png",
  "9b2cafba-dc29-48da-acc5-5304d7749dfe.109cd.png",
  "64dc78b3-befb-4704-a11f-faa99ac91e39.a91f1.png",
  "113e2a43-2afc-4655-a248-4b4b7a0d976c.3242d.png",
  "135f32b9-c426-4648-8087-4a8286cceac6.130e1.png",
  "493ffc87-ffa3-44d8-8df8-a6465351ed9c.160e1.png",
  "670c79e1-35bd-4d66-8e82-54ae0b449456.89109.png",
  "0952b3e9-b6a4-4666-9cb9-f330c53c576a.c01bf.png",
  "968a06de-7ab9-4d4d-a4a2-f111c62d4957.c56ef.png",
  "71905265-1bb7-4fd8-b6d0-0be62dd62781.1e233.png",
  "a01e2018-d42a-4cfb-8332-d9456d3a60b9.89ac0.png",
  "a1d79def-1d31-4a74-9bb3-c4c6de929c31.1f2bc.png",
  "a82798bc-7ff8-443d-bb44-5ad3c28a4a6d.552a2.png",
  "bbb297cd-ac54-4bdd-b15c-007681e5ba44.3a591.png",
  "c3ec9215-7536-4c80-a681-976ac3aecb96.dd097.png",
  "c6d35930-b7ae-4517-8ce5-dc682c3ef55d.d4880.png",
  "c172905e-e468-4e49-a2b0-74deb7c3d17a.21a00.png",
  "e7d1edb4-210a-4404-a125-389d27cae646.727a8.png",
  "ed224165-3612-4289-8d5a-975fdf801b18.41d45.png",
  "f36b1b13-fdbe-4dcd-ac48-a497d7a76e48.b0d15.png",
  "f44277d9-a231-43f7-aed4-f841edc89187.02a04.png"
];

// src/app/sic-bo/coin-toss/coin-toss-player.ts
var CoinTossPlayer = class {
  constructor(container) {
    this.container = container;
    this.playerContainer = new Container();
    this.assets = CoinTossAssets.getInstance();
    this.otherPlayer = new Sprite(this.assets.gameAssets.coinToss.otherPlayer);
    this.listPlayerContainer = {};
    this.mainPlayerID = Math.random().toString(36).substr(2, 10);
    this.playerContainer.zIndex = CoinTossZIndex.player.i;
    this.playerContainer.name = CoinTossZIndex.player.n;
    this.otherPlayer.width = 240;
    this.otherPlayer.height = 240;
    this.otherPlayer.position.set(2770, 1594);
    this.playerContainer.addChild(this.otherPlayer);
    this.playerContainer.sortableChildren = true;
    this.container.addChild(this.playerContainer);
    this.addPlayer({
      id: this.mainPlayerID,
      name: Math.random().toString(36).substr(2, 15),
      balance: Math.floor(Math.random() * 1e5) * 100 + Math.random(),
      avatar: avatarList[Math.floor(Math.random() * avatarList.length)],
      isMain: true
    });
    for (let i = 0; i < 100; i++) {
      this.addPlayer({
        id: Math.random().toString(36).substr(2, 10),
        name: Math.random().toString(36).substr(2, 7),
        balance: Math.floor(Math.random() * 1e3) * 10 + Math.random(),
        avatar: avatarList[Math.floor(Math.random() * avatarList.length)],
        isMain: false
      });
    }
    setInterval(() => {
      const playerID = this.getPlayerIdByPosition(Math.floor(Math.random() * 6) + 1);
      if (playerID) {
        this.playerLeave(playerID);
      }
    }, 3e3);
  }
  addPlayer(player) {
    const playerContainer = new CoinTossPlayerO(player);
    this.playerContainer.addChild(playerContainer.myPlayerContainer);
    this.listPlayerContainer[player.id] = playerContainer;
    if (!player.isMain) {
      const space = this.getSpacePosition(true);
      if (space) {
        this.showPlayer(player.id, space);
      }
    }
  }
  getPlayerIdByPosition(position) {
    return Object.keys(this.listPlayerContainer).find((playerId) => this.listPlayerContainer[playerId].position === position);
  }
  /*
  Đăng xuất -> Nếu đang trong bàn (Có position) thì xoá Avatar và thêm người khác vào
   */
  playerLeave(playerID) {
    const position = this.listPlayerContainer[playerID].position;
    this.removePlayer(playerID).subscribe((_) => {
      if (position >= 0) {
        const player = this.getRandomPlayerWaiting();
        if (player) {
          this.showPlayer(player.player.id, position);
        }
      }
    });
  }
  getRandomPlayerWaiting() {
    const players = this.getPlayerWaiting();
    if (players.length > 0)
      return players[Math.floor(Math.random() * players.length)];
    else
      return null;
  }
  /*
  Lấy danh sách các người chơi đang nằm ở nhóm chờ lên bàn
   */
  getPlayerWaiting() {
    return Object.keys(this.listPlayerContainer).filter((playerId) => this.listPlayerContainer[playerId].position === -1).map((playerId) => this.listPlayerContainer[playerId]);
  }
  getSpacePosition(random = false) {
    const playerPosition = this.playerContainer.children.filter((playerContainer) => playerContainer.playerPosition != -1).map((playerContainer) => playerContainer.playerPosition);
    const position = [1, 2, 3, 4, 5, 6].filter((position2) => !playerPosition.includes(position2));
    if (!random)
      return position;
    else
      return position[Math.floor(Math.random() * position.length)];
  }
  showPlayer(playerID, position) {
    if (this.listPlayerContainer[playerID].player.isMain)
      position = 0;
    if (this.listPlayerContainer[playerID].position >= 0)
      return true;
    else
      position = position;
    let kPosition;
    for (let k in this.listPlayerContainer) {
      if (this.listPlayerContainer[k].position === position) {
        kPosition = k;
        break;
      }
    }
    if (kPosition) {
      this.listPlayerContainer[kPosition].fadeOutMyPlayerContainer().then((_) => {
        this.listPlayerContainer[playerID].fadeInMyPlayerContainer(position).then();
      });
    } else
      this.listPlayerContainer[playerID].fadeInMyPlayerContainer(position).then();
    return true;
  }
  removePlayer(playerID) {
    return from(this.listPlayerContainer[playerID].fadeOutMyPlayerContainer()).pipe(tap((_) => {
      this.listPlayerContainer[playerID].destroy();
      delete this.listPlayerContainer[playerID];
    }));
  }
  destroy() {
    Object.keys(this.listPlayerContainer).forEach((playerID) => {
      this.listPlayerContainer[playerID].destroy();
      delete this.listPlayerContainer[playerID];
    });
    this.playerContainer?.destroy();
    this.playerContainer = null;
  }
};

// src/app/sic-bo/coin-toss/coin-toss-coin-bet.ts
var CoinTossCoinBet = class {
  /*
  ID của người chơi đặt cược
   */
  // public playerID!: string;
  /*
  Giá trị đặt cược
   */
  // public amount!: number;
  /*
  Vị trí người chơi đặt cược
   */
  // public playerPosition!: number;
  /*
  Vị trí đặt cược:
    - 1 là chẵn
    - 2 là lẻ
    - 3 là 4 đỏ
    - 4 là 3 đỏ 1 trắng
    - 5 là 2 đỏ 2 trắng
    - 6 là 1 đỏ 3 trắng
    - 7 là 4 trắng
   */
  // public betPosition!: number;
  // public denominationCoin!: DenominationContainerType;
  constructor(playerID, amount, playerPosition, betPosition, denominationCoin, coinId = v4_default()) {
    this.playerID = playerID;
    this.amount = amount;
    this.playerPosition = playerPosition;
    this.betPosition = betPosition;
    this.denominationCoin = denominationCoin;
    this.coinId = coinId;
  }
};

// src/app/sic-bo/coin-toss/coin-toss-betting-spot-area.ts
var bettingContainer;
var CoinTossBettingContainer = (container, checkNew = true) => {
  if (bettingContainer && checkNew) {
    return bettingContainer;
  } else {
    const betContainer = container.getChildByName(CoinTossZIndex.bettingSpot.n);
    bettingContainer = betContainer;
    return betContainer;
  }
};
var CoinTossBettingSpotArea = (container, spotIndex) => {
  const betContainer = CoinTossBettingContainer(container);
  const area = betContainer.getChildByName(CoinTossZIndex.bettingSpot.spotArea.n(spotIndex));
  return area;
};

// src/app/shared/utils/get-random-position.ts
var GetRandomPosition = (itemWidth, itemHeight, containerWidth, containerHeight) => {
  const x = Math.random() * (containerWidth - itemWidth);
  const y = Math.random() * (containerHeight - itemHeight);
  return { x, y };
};

// src/app/shared/utils/convert-item-size-angle.ts
var ConvertItemSizeAngle = (size, container) => {
  if (container.angle == 90) {
    return { height: size.width, width: size.height };
  }
  return size;
};

// src/app/shared/utils/get-item-size-container.ts
var GetItemSizeContainer = (itemGet, container) => {
  const bounds = itemGet.getBounds();
  const containerScale = container.scale;
  return __spreadProps(__spreadValues({}, ConvertItemSizeAngle({
    width: bounds.width * (1 / containerScale.x),
    height: bounds.height * (1 / containerScale.y)
  }, container)), {
    containerScale
  });
};

// src/app/shared/utils/get-item-position-container.ts
var GetItemPositionContainer = (itemGet, container) => {
  const position = itemGet.toLocal(new Point(0, 0), container);
  const scale = itemGet.scale;
  const anchor = itemGet.anchor;
  let anchorRemovePosition = {
    x: 0,
    y: 0
  };
  if (anchor) {
    const parent = itemGet.parent;
    const parentSize = GetItemSizeContainer(parent, container);
    anchorRemovePosition = {
      x: parentSize.width * anchor.x,
      y: parentSize.height * anchor.y
    };
  }
  return {
    x: position.x * -1 * scale.x - anchorRemovePosition.x,
    y: position.y * -1 * scale.y - anchorRemovePosition.y,
    anchorRemovePosition,
    anchor,
    scale,
    position
  };
};

// src/app/shared/utils/get-item-bounds-container.ts
var GetItemBoundsContainer = (item, container) => {
  return __spreadValues(__spreadValues({}, GetItemPositionContainer(item, container)), GetItemSizeContainer(item, container));
};

// src/app/shared/utils/tweening.ts
var _Tweening = class _Tweening {
  static tweenTo(object, property, target, time, easing, animationName, onchange, oncomplete) {
    object[animationName] = false;
    const tween = {
      object,
      property,
      propertyBeginValue: object[property],
      target,
      easing,
      time,
      animationName,
      change: onchange,
      complete: oncomplete,
      start: Date.now()
    };
    _Tweening.tweening.push(tween);
    return tween;
  }
  // Basic lerp funtion.
  static lerp(a1, a2, t) {
    return a1 * (1 - t) + a2 * t;
  }
  // Backout function from tweenjs.
  // https://github.com/CreateJS/TweenJS/blob/master/src/tweenjs/Ease.js
  static backout(amount) {
    return (t) => --t * t * ((amount + 1) * t + amount) + 1;
  }
};
_Tweening.tweening = [];
var Tweening = _Tweening;

// src/app/sic-bo/coin-toss/coin-toss-list-coin-bet.ts
var CoinTossListCoinBet = class {
  constructor(container) {
    this.container = container;
    this.listCoinBet = [];
    this.listCoinContainer = new Container();
    this.coinSize = 62;
    this.listCoinContainer.zIndex = CoinTossZIndex.listCoinBet.i;
    this.container.addChild(this.listCoinContainer);
    this.playerContainer = this.container.getChildByName("playerContainer");
    this.dealer = this.container.getChildByName(CoinTossZIndex.dealer.n);
    this.spotsContainer = this.container.getChildByName("spotsContainer");
    this.denominationsContainer = this.container.getChildByName("denominationsContainer");
    this.denominationsMaskWrapper = this.denominationsContainer.getChildByName("denominationsMaskWrapper");
    this.denominationsWrapper = this.denominationsMaskWrapper.getChildByName("denominationsWrapper");
    let timeOutSpotToPlayerWin = {};
    const updateCoinAnimationWin = (spotPosition) => {
      if (timeOutSpotToPlayerWin[spotPosition]) {
        clearTimeout(timeOutSpotToPlayerWin[spotPosition]);
      }
      timeOutSpotToPlayerWin[spotPosition] = setTimeout(() => {
        this.coinWin(spotPosition);
        delete timeOutSpotToPlayerWin[spotPosition];
      }, 200);
    };
    const updateCoinAnimation = () => {
      this.listCoinBet.filter((coin) => (coin.denominationCoin?.xPosition || coin.denominationCoin?.yPosition) && (coin.denominationCoin?.x != coin.denominationCoin?.xPosition || coin.denominationCoin?.y != coin.denominationCoin?.yPosition)).forEach((coin) => {
        coin.denominationCoin.x = coin.denominationCoin.xPosition;
        coin.denominationCoin.y = coin.denominationCoin.yPosition;
        if ((coin.denominationCoin || {}).xPosition && (coin.denominationCoin || {}).yPosition) {
          coin.denominationCoin.xPosition = 0;
          coin.denominationCoin.yPosition = 0;
        }
        if ((coin.denominationCoin || {}).xPositionAnimationDealerSpot && (coin.denominationCoin || {}).xPositionAnimationDealerSpot) {
          updateCoinAnimationWin(coin.betPosition);
        }
        if ((coin.denominationCoin || {}).xPositionAnimationDealer && (coin.denominationCoin || {}).yPositionAnimationDealer || (coin.denominationCoin || {}).xPositionAnimationWin && (coin.denominationCoin || {}).yPositionAnimationWin) {
          coin.denominationCoin.xPosition = 0;
          coin.denominationCoin.yPosition = 0;
          this.removeCoin(coin);
        }
      });
      this.animationID = requestAnimationFrame(updateCoinAnimation);
    };
    this.animationID = requestAnimationFrame(updateCoinAnimation);
  }
  /*
    Các coin thắng được dealer đưa về spot
    sau đó gọi coinWin
   */
  dealerToWinSpot(betPosition) {
    const destinationPointDealer = this.getDealerPoint();
    this.listCoinBet.filter((coin) => coin.betPosition === betPosition).forEach((coin) => {
      const playerO = this.playerContainer.getChildByName(coin.playerID);
      const denominationCoin = CoinTossDenominationO(DenominationSize[coin.amount].color, DenominationSize[coin.amount].name, 0, DenominationSize[coin.amount].value, this.coinSize, this.coinSize, 6e3, false);
      this.listCoinBet.push(new CoinTossCoinBet(coin.playerID, coin.amount, playerO.playerPosition, betPosition, denominationCoin));
      denominationCoin.x = destinationPointDealer.x;
      denominationCoin.y = destinationPointDealer.y;
      const destinationPoint = this.getRandomSpotPosition(denominationCoin, betPosition);
      this.moveDenominationAnimation(denominationCoin, destinationPoint.x, destinationPoint.y, "xPositionAnimationDealerSpot", "yPositionAnimationDealerSpot");
      this.listCoinContainer.addChild(denominationCoin);
    });
  }
  /*
    Các coin thắng được đưa từ spot về người chơi
   */
  coinWin(betPosition) {
    const playerData = {};
    this.listCoinBet.filter((coin) => coin.betPosition === betPosition).forEach((coin) => {
      let player = playerData[coin.playerID];
      if (!player) {
        playerData[coin.playerID] = this.playerContainer.getChildByName(coin.playerID);
        player = playerData[coin.playerID];
      }
      const playerBounds = GetItemBoundsContainer(player, this.container);
      const destinationPointPlayer = new Point(playerBounds.x + playerBounds.width / 2 - this.coinSize / 2, playerBounds.y + playerBounds.height / 2);
      this.moveDenominationAnimation(coin.denominationCoin, destinationPointPlayer.x, destinationPointPlayer.y, "xPositionAnimationWin", "yPositionAnimationWin");
    });
  }
  getDealerPoint() {
    const dealerBounds = GetItemBoundsContainer(this.dealer, this.container);
    const destinationPointDealer = new Point(dealerBounds.x + dealerBounds.width / 2 - this.coinSize / 2, dealerBounds.y + dealerBounds.height - 90);
    return destinationPointDealer;
  }
  /*
    Các coin thua được đưa từ spot về dealer
   */
  coinToDealer(betPosition) {
    const destinationPointDealer = this.getDealerPoint();
    if (Array.isArray(betPosition)) {
      betPosition.forEach((position) => {
        this.listCoinBet.filter((coin) => coin.betPosition === position).forEach((coin) => {
          this.moveDenominationAnimation(coin.denominationCoin, destinationPointDealer.x, destinationPointDealer.y, "xPositionAnimationDealer", "yPositionAnimationDealer");
        });
      });
    } else {
      this.listCoinBet.filter((coin) => coin.betPosition === betPosition).forEach((coin) => {
        this.moveDenominationAnimation(coin.denominationCoin, destinationPointDealer.x, destinationPointDealer.y, "xPositionAnimationDealer", "yPositionAnimationDealer");
      });
    }
  }
  removeCoin(coin) {
    coin.denominationCoin?.destroy();
    coin.denominationCoin = null;
    this.listCoinBet.splice(this.listCoinBet.map((coin2) => coin2.coinId).indexOf(coin.coinId), 1);
  }
  getRandomSpotPosition(denominationCoin, betPosition) {
    const spotArea = CoinTossBettingSpotArea(this.container, betPosition);
    const areaBounds = GetItemBoundsContainer(spotArea, this.container);
    const randomPosition = GetRandomPosition(denominationCoin.width, denominationCoin.height, areaBounds.width, areaBounds.height);
    return {
      x: randomPosition.x + areaBounds.x,
      y: randomPosition.y + areaBounds.y
    };
  }
  moveDenominationAnimation(denominationCoin, x, y, xPositionName = "xPositionAnimation", yPositionName = "yPositionAnimation", duration = 800) {
    denominationCoin.xPosition = denominationCoin.x;
    denominationCoin.yPosition = denominationCoin.y;
    Tweening.tweenTo(denominationCoin, "xPosition", x, 800, Tweening.backout(0.5), xPositionName);
    Tweening.tweenTo(denominationCoin, "yPosition", y, 800, Tweening.backout(0.5), yPositionName);
  }
  addBet(playerID, amount, betPosition) {
    const playerO = this.playerContainer.getChildByName(playerID);
    const denominationCoin = CoinTossDenominationO(DenominationSize[amount].color, DenominationSize[amount].name, 0, DenominationSize[amount].value, this.coinSize, this.coinSize, 6e3, false);
    this.listCoinBet.push(new CoinTossCoinBet(playerID, amount, playerO.playerPosition, betPosition, denominationCoin));
    if (playerO.isMain) {
      const denominationSprite = this.denominationsWrapper.getChildByName(CoinTossZIndex.denomination.item.n(amount));
      const denominationActive = denominationSprite.getChildByName(CoinTossZIndex.denomination.item.active.n);
      denominationActive.rotation = 0;
      const denominationBounds = GetItemBoundsContainer(denominationSprite, this.container);
      denominationCoin.position.set(denominationBounds.x + denominationBounds.width / (denominationActive.scale.x + 1), denominationBounds.y + denominationBounds.height / (denominationActive.scale.y + 1));
      const destinationPoint = this.getRandomSpotPosition(denominationCoin, betPosition);
      this.moveDenominationAnimation(denominationCoin, destinationPoint.x, destinationPoint.y);
    } else {
    }
    this.listCoinContainer.addChild(denominationCoin);
  }
  destroy() {
    this.listCoinBet = [];
    this.listCoinContainer?.destroy();
    this.listCoinContainer = null;
    this.playerContainer?.destroy();
    this.playerContainer = null;
    this.spotsContainer?.destroy();
    this.spotsContainer = null;
    this.denominationsContainer?.destroy();
    this.denominationsContainer = null;
    this.denominationsMaskWrapper?.destroy();
    this.denominationsMaskWrapper = null;
    this.denominationsWrapper?.destroy();
    this.denominationsWrapper = null;
    if (this.animationID)
      cancelAnimationFrame(this.animationID);
  }
};

// src/app/shared/utils/gradientTexure.ts
var GradientTextureGold = (height) => {
  const canvas = document.createElement("canvas");
  canvas.width = 1;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  const grd = ctx.createLinearGradient(0, 0, 0, height);
  grd.addColorStop(0, "#905038");
  grd.addColorStop(0.4, "#fdff6c");
  grd.addColorStop(0.5, "#f3fb66");
  grd.addColorStop(0.6, "#c4cb56");
  grd.addColorStop(1, "#feff6d");
  ctx.fillStyle = grd;
  ctx.fillRect(0, 0, 1, height);
  return Texture.from(canvas);
};
var GradientTexureGray = (height) => {
  const canvas = document.createElement("canvas");
  canvas.width = 1;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  const grd = ctx.createLinearGradient(0, 0, 0, 100);
  grd.addColorStop(0, "#100e0e");
  grd.addColorStop(0.5, "#313131");
  grd.addColorStop(1, "#100e0e");
  ctx.fillStyle = grd;
  ctx.fillRect(0, 0, 1, height);
  return Texture.from(canvas);
};

// src/app/sic-bo/coin-toss/coin-toss-cal-history.ts
var CoinTossCalHistory = class {
  //332 378 radius: 25px bg: 070603
  constructor(container) {
    this.container = container;
    this.percentHistory = new Container();
    this.tableHistory = new Container();
    this.percentHistorySize = {
      width: 332,
      height: 378,
      border: 6,
      radius: 26
    };
    this.tableHistorySize = {
      width: 936,
      height: 378,
      border: 6,
      radius: 0,
      itemSize: (378 - 6) / 6
    };
    this.assets = CoinTossAssets.getInstance();
    this.container.addChild(this.percentHistory);
    this.container.addChild(this.tableHistory);
    this.tableHistory.sortableChildren = true;
    this.tableHistory.zIndex = CoinTossZIndex.calHistory.i + 1;
    this.tableHistory.position.set(CoinTossZIndex.calHistory.percent.left + this.percentHistorySize.width - this.percentHistorySize.border, CoinTossZIndex.calHistory.percent.top);
    this.percentHistory.sortableChildren = true;
    this.percentHistory.zIndex = CoinTossZIndex.calHistory.i;
    this.percentHistory.position.set(CoinTossZIndex.calHistory.percent.left, CoinTossZIndex.calHistory.percent.top);
    this.__IniPercentHistory();
    this.__IniTableHistory();
    this.__IniBoardData();
    this.__IniPercentData();
  }
  __IniPercentData() {
    this.percentSubscription = CoinTossHistory.historyPercent$.subscribe((historyData) => {
      const evenText = this.percentHistory.getChildByName("evenPercent");
      const oddText = this.percentHistory.getChildByName("oddPercent");
      const fourRed = this.percentHistory.getChildByName("fourRed");
      const fourWhite = this.percentHistory.getChildByName("fourWhite");
      const twoRedTwoWhite = this.percentHistory.getChildByName("twoRedTwoWhite");
      const threeRedOneWhite = this.percentHistory.getChildByName("threeRedOneWhite");
      const oneRedThreeWhite = this.percentHistory.getChildByName("oneRedThreeWhite");
      evenText.text = `${historyData.even}%`;
      oddText.text = `${historyData.odd}%`;
      fourRed.text = `${historyData.fourRed}%`;
      fourWhite.text = `${historyData.fourWhite}%`;
      twoRedTwoWhite.text = `${historyData.twoRedTwoWhite}%`;
      threeRedOneWhite.text = `${historyData.threeRedOneWhite}%`;
      oneRedThreeWhite.text = `${historyData.oneRedThreeWhite}%`;
    });
  }
  __IniBoardData() {
    this.boardSubscription = CoinTossHistory.historyBoard$.subscribe((boardData) => {
      this.tableHistory.children.filter((child) => child.name?.includes("square")).forEach((child) => {
        child.removeChildren();
      });
      boardData.forEach((boardRow, colIndex) => {
        boardRow.forEach((boardCol, rowIndex) => {
          const boardContainer = this.tableHistory.getChildByName(`square-${rowIndex}-${colIndex}`);
          const circle = this.drawHistoryCoin(!boardCol.isWhite);
          circle.zIndex = 1;
          const style = new TextStyle({
            fontFamily: this.assets.gameAssets.coinToss.notoSerif.family,
            fontSize: 30,
            fill: boardCol.isWhite ? 460551 : 16445422
          });
          const text = new Text(boardCol.red.toString(), style);
          text.zIndex = 2;
          text.anchor.set(0.5, 0.5);
          text.position.set(this.tableHistorySize.itemSize / 2 - this.tableHistorySize.border / 2, this.tableHistorySize.itemSize / 2 - this.tableHistorySize.border / 2);
          boardContainer.addChild(circle);
          boardContainer.addChild(text);
        });
      });
    });
  }
  destroy() {
    this.percentHistory?.destroy();
    this.boardSubscription?.unsubscribe();
    this.percentSubscription?.unsubscribe();
    this.percentHistory = null;
  }
  __IniTableHistory() {
    this.__IniTableHistoryBackground();
  }
  __IniTableHistoryBackground() {
    let rectangle = new Graphics();
    rectangle.zIndex = 1;
    rectangle.beginFill(460291);
    rectangle.lineStyle({
      width: this.tableHistorySize.border,
      color: 16777215,
      texture: GradientTextureGold(332)
    });
    rectangle.moveTo(0, 0);
    rectangle.lineTo(this.tableHistorySize.width, 0);
    rectangle.bezierCurveTo(this.tableHistorySize.width, 0, this.tableHistorySize.width, this.tableHistorySize.radius, this.tableHistorySize.width, this.tableHistorySize.radius);
    rectangle.lineTo(this.tableHistorySize.width, this.tableHistorySize.height - this.tableHistorySize.radius);
    rectangle.bezierCurveTo(this.tableHistorySize.width, this.tableHistorySize.height, this.tableHistorySize.width - this.tableHistorySize.radius, this.tableHistorySize.height, this.tableHistorySize.width - this.tableHistorySize.radius, this.tableHistorySize.height);
    rectangle.lineTo(0, this.tableHistorySize.height);
    rectangle.lineTo(0, 0);
    rectangle.endFill();
    this.tableHistory.addChild(rectangle);
    const squareHeight = this.tableHistorySize.itemSize;
    const squareWidth = squareHeight;
    for (let row = 0; row < 6; row++) {
      for (let col = 0; col < 15; col++) {
        const squareContainer = new Container();
        let square = new Graphics();
        square.lineStyle(4, 3223857, 1e-4);
        square.drawRect(0, 0, squareWidth, squareHeight);
        squareContainer.x = col * squareWidth + 2;
        squareContainer.sortableChildren = true;
        squareContainer.y = row * squareHeight + 2;
        squareContainer.name = `square-${row}-${col}`;
        squareContainer.zIndex = 40;
        squareContainer.addChild(square);
        this.tableHistory.addChild(squareContainer);
      }
    }
    for (let i = 0; i < 5; i++) {
      let line = new Graphics();
      line.lineStyle(6, 3947323, 0.4);
      line.zIndex = 50;
      line.moveTo(0, 0);
      line.lineTo(this.tableHistorySize.width - this.tableHistorySize.border, 0);
      line.y = (i + 1) * this.tableHistorySize.itemSize;
      line.x = this.tableHistorySize.border / 2;
      this.tableHistory.addChild(line);
    }
    for (let i = 0; i < 14; i++) {
      let line = new Graphics();
      line.lineStyle(6, 3947323, 0.4);
      line.zIndex = 50;
      line.moveTo(0, 0);
      line.lineTo(0, this.tableHistorySize.height - this.tableHistorySize.border);
      line.x = (i + 1) * ((this.tableHistorySize.width - this.tableHistorySize.border) / 15);
      this.tableHistory.addChild(line);
    }
  }
  __IniPercentHistory() {
    this.percentTextType = {
      white: new TextStyle({
        fontFamily: this.assets.gameAssets.coinToss.notoSerifBold.family,
        fontSize: 33,
        fill: 15724527
      }),
      black: new TextStyle({
        fontFamily: this.assets.gameAssets.coinToss.notoSerifBold.family,
        fontSize: 33,
        fill: 0
      })
    };
    this.__IniPercentHistoryBackground();
    const textRight = this.percentHistorySize.width - 15;
    const evenText = new Text("0%", this.percentTextType.black);
    evenText.zIndex = 100;
    evenText.name = "evenPercent";
    evenText.anchor.set(1, 0);
    evenText.position.set(textRight, 13);
    this.percentHistory.addChild(evenText);
    const oddText = new Text("0%", this.percentTextType.white);
    oddText.zIndex = 100;
    oddText.anchor.set(1, 0);
    oddText.position.set(textRight, 4 * 54 + 10);
    this.percentHistory.addChild(oddText);
    const fourRed = new Text("0%", this.percentTextType.white);
    fourRed.zIndex = 100;
    fourRed.anchor.set(1, 0);
    fourRed.position.set(textRight, 1 * 55 + 5);
    this.percentHistory.addChild(fourRed);
    const fourWhite = new Text("0%", this.percentTextType.white);
    fourWhite.zIndex = 100;
    fourWhite.anchor.set(1, 0);
    fourWhite.position.set(textRight, 2 * 55 + 5);
    this.percentHistory.addChild(fourWhite);
    const twoRedTwoWhite = new Text("0%", this.percentTextType.white);
    twoRedTwoWhite.zIndex = 100;
    twoRedTwoWhite.anchor.set(1, 0);
    twoRedTwoWhite.position.set(textRight, 3 * 55 + 5);
    this.percentHistory.addChild(twoRedTwoWhite);
    const threeRedOneWhite = new Text("0%", this.percentTextType.white);
    threeRedOneWhite.zIndex = 100;
    threeRedOneWhite.anchor.set(1, 0);
    threeRedOneWhite.position.set(textRight, 5 * 54 + 7);
    this.percentHistory.addChild(threeRedOneWhite);
    const oneRedThreeWhite = new Text("0%", this.percentTextType.white);
    oneRedThreeWhite.zIndex = 100;
    oneRedThreeWhite.anchor.set(1, 0);
    oneRedThreeWhite.position.set(textRight, 6 * 54 + 7);
    this.percentHistory.addChild(oneRedThreeWhite);
    oddText.name = "oddPercent";
    fourRed.name = "fourRed";
    fourWhite.name = "fourWhite";
    twoRedTwoWhite.name = "twoRedTwoWhite";
    threeRedOneWhite.name = "threeRedOneWhite";
    oneRedThreeWhite.name = "oneRedThreeWhite";
    this.__IniEven();
    this.__IniOdd();
    this.__IniLine();
  }
  drawHistoryCoin(red, radius = 25) {
    const circle = new Graphics();
    const fillColor = !red ? 16777215 : 13056817;
    circle.beginFill(fillColor);
    circle.drawCircle(0, 0, radius);
    circle.endFill();
    circle.x = this.tableHistorySize.itemSize / 2 - this.tableHistorySize.border / 2;
    circle.y = this.tableHistorySize.itemSize / 2 - this.tableHistorySize.border / 2;
    return circle;
  }
  __IniHistoryCoin(red, white, row) {
    for (let i = 0; i < red; i++) {
      const circle = this.drawHistoryCoin(true, 20);
      circle.zIndex = 100;
      circle.x = 40 + i * 55;
      circle.y = row * 54 + 25;
      this.percentHistory.addChild(circle);
    }
    for (let i = 0; i < white; i++) {
      const circle = this.drawHistoryCoin(false, 20);
      circle.zIndex = 100;
      circle.x = 40 + (i + red) * 55;
      circle.y = row * 54 + 25;
      this.percentHistory.addChild(circle);
    }
  }
  __IniLine() {
    this.__IniHistoryCoin(4, 0, 1);
    this.__IniHistoryCoin(0, 4, 2);
    this.__IniHistoryCoin(2, 2, 3);
    this.__IniHistoryCoin(3, 1, 5);
    this.__IniHistoryCoin(1, 3, 6);
    for (let i = 0; i < 5; i++) {
      let line = new Graphics();
      line.lineStyle({
        width: 6,
        // color: 0xff0000,
        color: 16777215,
        texture: GradientTexureGray(5),
        alpha: 0.9
      });
      line.moveTo(0, 0);
      line.lineTo(326, 0);
      line.y = (i + 2) * 54;
      line.x = 3;
      line.zIndex = 20;
      this.percentHistory.addChild(line);
    }
  }
  __IniOdd() {
    let rectangle = new Graphics();
    rectangle.beginFill(13056817);
    rectangle.drawRect(0, 0, 326, 49);
    rectangle.endFill();
    rectangle.y = 4 * 54 + 3;
    rectangle.x = 3;
    rectangle.zIndex = 30;
    const text = new Text("Le\u0309", this.percentTextType.white);
    text.zIndex = 40;
    text.position.set(20, 4 * 54 + 10);
    this.percentHistory.addChild(text);
    this.percentHistory.addChild(rectangle);
  }
  __IniEven() {
    let rectangle = new Graphics();
    rectangle.zIndex = 2;
    rectangle.beginFill(16777215);
    rectangle.moveTo(this.percentHistorySize.width, 0);
    rectangle.lineTo(this.percentHistorySize.radius, 0);
    rectangle.bezierCurveTo(0, 0, 0, this.percentHistorySize.radius - this.percentHistorySize.border, 0, this.percentHistorySize.radius - this.percentHistorySize.border);
    rectangle.lineTo(0, 54);
    rectangle.lineTo(this.percentHistorySize.width - this.percentHistorySize.border, 54);
    rectangle.lineTo(this.percentHistorySize.width - this.percentHistorySize.border, 0);
    rectangle.endFill();
    rectangle.x = 3;
    rectangle.y = 3;
    const text = new Text("Ch\u0103\u0303n", this.percentTextType.black);
    text.zIndex = 3;
    text.position.set(20, 13);
    this.percentHistory.addChild(text);
    this.percentHistory.addChild(rectangle);
  }
  __IniPercentHistoryBackground() {
    let rectangle = new Graphics();
    rectangle.zIndex = 1;
    rectangle.beginFill(460291);
    rectangle.lineStyle({
      width: this.percentHistorySize.border,
      color: 16777215,
      texture: GradientTextureGold(332)
    });
    rectangle.moveTo(this.percentHistorySize.width, 0);
    rectangle.lineTo(this.percentHistorySize.radius, 0);
    rectangle.bezierCurveTo(0, 0, 0, this.percentHistorySize.radius, 0, this.percentHistorySize.radius);
    rectangle.lineTo(0, this.percentHistorySize.height - this.percentHistorySize.radius);
    rectangle.bezierCurveTo(0, this.percentHistorySize.height, this.percentHistorySize.radius, this.percentHistorySize.height, 25, this.percentHistorySize.height);
    rectangle.lineTo(this.percentHistorySize.width, this.percentHistorySize.height);
    rectangle.lineTo(this.percentHistorySize.width, 0);
    rectangle.endFill();
    this.percentHistory.addChild(rectangle);
  }
};

// src/app/sic-bo/coin-toss/coin-toss-container.ts
var CoinTossContainer = class {
  // public table = new Texture(Assets.get('coin-toss'));
  constructor(game) {
    this.game = game;
    this.containerRealHeight = 1898;
    this.containerRealWidth = 3538;
    this.containerSpecRatio = this.containerRealWidth / this.containerRealHeight;
    this.tableSpecRatio = 1315 / 607;
    this.dealerSpecRatio = 192 / 243;
    this.container = new Container();
    this.containerWidth = this.containerRealWidth;
    this.containerHeight = this.containerRealHeight;
    this.assets = CoinTossAssets.getInstance();
    this.graphic = new Graphics();
    this.init().then();
  }
  init() {
    return __async(this, null, function* () {
      this.container.sortableChildren = true;
      yield this.assets.loadSuccess$.pipe(take(1), delay(1)).toPromise();
      this.table = new Sprite(this.assets.gameAssets.coinToss.table);
      this.table.zIndex = CoinTossZIndex.table.i;
      this.dealer = new Sprite(this.assets.gameAssets.coinToss.dealer);
      this.dealer.zIndex = CoinTossZIndex.dealer.i;
      this.dealer.name = CoinTossZIndex.dealer.n;
      this.container.addChild(this.graphic);
      this.game.stage.addChild(this.container);
      this.container.addChild(this.table);
      this.container.addChild(this.dealer);
      this.iniContainerSize();
      this.iniTableSize();
      this.iniDealerSize();
      this.coinTossPlate = new CoinTossPlate(this.container);
      this.bettingSpotsContains = new CoinTossBettingSpots(this.container, (spotPosition) => {
        this.assets.gameAssets.coinToss.soundCoinBet.play({
          singleInstance: true,
          loop: false
        });
        this.listCoinBet.addBet(this.playerContainer.mainPlayerID, this.bettingAmount, -spotPosition);
      });
      this.tableHistory = new CoinTossTableHistory(this.container);
      this.playerContainer = new CoinTossPlayer(this.container);
      this.denominationsContainer = new CoinTossDenominations(this.container, (value) => {
        this.bettingAmount = value;
      });
      this.listCoinBet = new CoinTossListCoinBet(this.container);
      this.calHistory = new CoinTossCalHistory(this.container);
    });
  }
  iniSize() {
    this.iniContainerSize();
  }
  iniContainerSize() {
    let scale;
    if (this.game.screen.width > this.game.screen.height || this.game.screen.width > 900) {
      const screenRatio = this.game.screen.width / this.game.screen.height;
      if (screenRatio < this.containerSpecRatio) {
        scale = this.game.screen.width / this.containerWidth;
        this.container.scale.set(scale);
      } else {
        scale = this.game.screen.height / this.containerHeight;
        this.container.scale.set(scale);
      }
      this.container.angle = 0;
      this.container.position.x = (this.game.screen.width - this.containerWidth * scale) / 2;
      this.container.position.y = (this.game.screen.height - this.containerHeight * scale) / 2;
      this.container.pivot.x = 0;
      this.container.pivot.y = 0;
    } else {
      scale = this.game.screen.width / this.containerHeight;
      this.container.scale.set(scale);
      this.container.pivot.x = 0;
      this.container.pivot.y = this.containerHeight;
      this.container.position.x = 0;
      this.container.position.y = (this.game.screen.height - this.containerWidth * scale) / 2;
      this.container.angle = 90;
    }
  }
  iniTableSize() {
    this.table.width = 3138;
    this.table.height = this.table.width / this.tableSpecRatio;
    this.table.y = 410;
    this.table.x = 200;
  }
  iniDealerSize() {
    this.dealer.width = 450;
    this.dealer.height = this.dealer.width / this.dealerSpecRatio;
    this.dealer.x = 1540;
    this.dealer.y = 48;
  }
  destroy() {
    this.coinTossPlate?.destroy();
    this.bettingSpotsContains?.destroy();
    this.denominationsContainer?.destroy();
    this.tableHistory?.destroy();
    this.container?.destroy(true);
    this.playerContainer?.destroy();
    this.playerContainer = null;
    this.listCoinBet?.destroy();
    this.listCoinBet = null;
    this.calHistory?.destroy();
    this.calHistory = null;
  }
};

// src/app/sic-bo/coin-toss/coin-toss-win-animation.ts
var assets2 = CoinTossAssets.getInstance();
var CoinTossWinAnimation = (mainContainer, playerContainer, amount) => {
  const textStylePlayerWinAmount = new TextStyle({
    fontFamily: assets2.gameAssets.coinToss.notoSerifBold.family,
    fontSize: 90,
    fill: ["#fff073", "#fae882", "#ffeca3", "#fae882", "#fff073"],
    dropShadow: true,
    dropShadowColor: "#371600",
    dropShadowBlur: 5,
    dropShadowAlpha: 0.8,
    dropShadowDistance: 0,
    dropShadowAngle: 0,
    stroke: "#371600",
    strokeThickness: 1
    // Độ đậm của viền chữ
  });
  let winAnimationContainer = new Container();
  winAnimationContainer.zIndex = CoinTossZIndex.coinTossWinAnimation.i;
  winAnimationContainer.name = CoinTossZIndex.coinTossWinAnimation.n;
  winAnimationContainer.sortableChildren = true;
  let amountDisplay;
  if (Number.isInteger(amount)) {
    amountDisplay = amount.toLocaleString().toString();
  } else {
    amountDisplay = parseFloat(amount.toFixed(2)).toLocaleString().toString();
  }
  amountDisplay = "+" + amountDisplay;
  let amountText = new Text(amountDisplay, textStylePlayerWinAmount);
  amountText.zIndex = 30;
  amountText.anchor.set(0.5, 1);
  winAnimationContainer.addChild(amountText);
  const avatar = playerContainer.getChildByName("avatarContainer");
  const balanceBackground = playerContainer.getChildByName("balanceBackground");
  const animationWidth = avatar.width * 2;
  const WinViHeight = animationWidth * (94 / 247);
  const WinViTop = playerContainer.height;
  let winBG = new Sprite(assets2.gameAssets.coinToss.winBG);
  winBG.width = animationWidth * 0.8;
  winBG.height = animationWidth * 0.8 * (549 / 533);
  winBG.zIndex = 10;
  winBG.anchor.set(0.5, 0.5);
  winBG.x = animationWidth / 2;
  winBG.y = animationWidth / 2;
  winAnimationContainer.addChild(winBG);
  let winCoin = new Sprite(assets2.gameAssets.coinToss.winCoin);
  winCoin.width = animationWidth * 0.6;
  winCoin.height = animationWidth * 0.6 * (614 / 539);
  winCoin.zIndex = 11;
  winCoin.anchor.set(0.5, 0.5);
  winCoin.x = animationWidth / 2;
  winCoin.y = animationWidth / 2;
  winAnimationContainer.addChild(winCoin);
  let animateWinBGAndCoinSize = (loopIndex = 0, maxLoop = 1, scaleXWinBG, scaleYWinBG, scaleXWinCoin, scaleYWinCoin) => {
    let startTime = null;
    const duration = 1e3;
    const animate = (time) => {
      if (!winBG || !winCoin)
        return;
      if (!startTime)
        startTime = time;
      const elapsed = time - startTime;
      const scaleValueXWinBG = scaleXWinBG + Math.sin(elapsed / duration * Math.PI * 2) * 0.2;
      const scaleValueYWinBG = scaleYWinBG + Math.sin(elapsed / duration * Math.PI * 2) * 0.2;
      const scaleValueXWinCoin = scaleXWinCoin + Math.sin(elapsed / duration * Math.PI * 2) * 0.1 * -1;
      const scaleValueYWinCoin = scaleYWinCoin + Math.sin(elapsed / duration * Math.PI * 2) * 0.1 * -1;
      winBG.scale.set(scaleValueXWinBG, scaleValueYWinBG);
      winCoin.scale.set(scaleValueXWinCoin, scaleValueYWinCoin);
      if (elapsed < duration) {
        requestAnimationFrame(animate);
      } else {
        loopIndex++;
        if (loopIndex <= maxLoop)
          animateWinBGAndCoinSize(loopIndex, maxLoop, scaleXWinBG, scaleYWinBG, scaleXWinCoin, scaleYWinCoin);
        else {
          winBG.scale.set(1, 1);
          winCoin.scale.set(1, 1);
          winBG.destroy();
          winCoin.destroy();
          winBG = null;
          winCoin = null;
          animateWinBGAndCoinSize = null;
        }
      }
    };
    requestAnimationFrame(animate);
  };
  animateWinBGAndCoinSize(0, 1, winBG.scale.x, winBG.scale.y, winCoin.scale.x, winCoin.scale.y);
  amountText.x = animationWidth / 2;
  const amountTextTop = WinViTop - amountText.height * 0.6;
  amountText.y = amountTextTop;
  const amountTextMove = amountText.height * 0.5;
  let animateAmountText = () => {
    let elapsed = 0;
    const duration = 2300;
    const stepTime = 50;
    const startY = amountText.y;
    const endY = startY - amountTextMove;
    const animationInterval = setInterval(() => {
      if (!amountText)
        return clearInterval(animationInterval);
      elapsed += stepTime;
      amountText.y = startY - elapsed / duration * amountTextMove;
      if (elapsed >= duration) {
        amountText.y = endY;
        clearInterval(animationInterval);
        animateAmountText = null;
        amountText?.destroy();
        amountText = null;
      }
    }, stepTime);
  };
  animateAmountText();
  winAnimationContainer.x = playerContainer.x + balanceBackground.x - (animationWidth * 1.25 - balanceBackground.width) / 2;
  winAnimationContainer.y = playerContainer.y + avatar.y - (animationWidth - avatar.width) / 2;
  winAnimationContainer.width = animationWidth;
  let WinVI = new Sprite(assets2.gameAssets.coinToss.winVI);
  WinVI.zIndex = 20;
  WinVI.width = animationWidth;
  WinVI.height = WinViHeight;
  WinVI.anchor.set(0.5, 0.5);
  WinVI.x = animationWidth / 2;
  WinVI.alpha = 0;
  WinVI.y = WinViTop;
  let animateWinVI = () => {
    let elapsed = 0;
    const duration = 300;
    const stepTime = 20;
    const animationInterval = setInterval(() => {
      if (!WinVI)
        return clearInterval(animationInterval);
      elapsed += stepTime;
      WinVI.alpha = elapsed / duration;
      WinVI.width = animationWidth - elapsed / duration * (animationWidth - animationWidth * 0.85);
      WinVI.height = WinViHeight - elapsed / duration * (WinViHeight - WinViHeight * 0.85);
      if (elapsed >= duration) {
        WinVI.alpha = 1;
        WinVI.width = animationWidth * 0.85;
        WinVI.height = WinViHeight * 0.85;
        clearInterval(animationInterval);
        animateWinVI = null;
        animateWinVISize(0, 3, WinVI.scale.x, WinVI.scale.y);
      }
    }, stepTime);
  };
  animateWinVI();
  let animateWinVISize = (loopIndex = 0, maxLoop = 1, scaleX, scaleY) => {
    let startTime = null;
    const duration = 500;
    const animate = (time) => {
      if (!WinVI)
        return;
      if (!startTime)
        startTime = time;
      const elapsed = time - startTime;
      const scaleValueX = scaleX + Math.sin(elapsed / duration * Math.PI * 2) * 0.3;
      const scaleValueY = scaleY + Math.sin(elapsed / duration * Math.PI * 2) * 0.3;
      WinVI.scale.set(scaleValueX, scaleValueY);
      if (elapsed < duration) {
        requestAnimationFrame(animate);
      } else {
        loopIndex++;
        if (loopIndex <= maxLoop)
          animateWinVISize(loopIndex, maxLoop, scaleX, scaleY);
        else {
          WinVI?.destroy();
          WinVI = null;
          animateWinVISize = null;
        }
      }
    };
    requestAnimationFrame(animate);
  };
  winAnimationContainer.addChild(WinVI);
  mainContainer.addChild(winAnimationContainer);
  setTimeout(() => {
    winAnimationContainer?.destroy();
    mainContainer.removeChild(winAnimationContainer);
    winAnimationContainer = null;
  }, 2e3);
};

// src/app/shared/services/screen-size.service.ts
var _ScreenSizeService = class _ScreenSizeService {
  constructor(zone) {
    this.zone = zone;
    this.width$ = new ReplaySubject(1);
    this.height$ = new ReplaySubject(1);
    this.screen$ = new Subject();
    this.zone.runOutsideAngular(() => {
      fromEvent(window, "resize").pipe(sampleTime(500)).subscribe((event) => {
        this.getScreenSize();
      });
    });
    this.getScreenSize();
  }
  getScreenSize() {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
    this.width$.next(this.screenWidth);
    this.height$.next(this.screenHeight);
    this.screen$.next({ width: this.screenWidth, height: this.screenHeight });
  }
};
_ScreenSizeService.\u0275fac = function ScreenSizeService_Factory(t) {
  return new (t || _ScreenSizeService)(\u0275\u0275inject(NgZone));
};
_ScreenSizeService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ScreenSizeService, factory: _ScreenSizeService.\u0275fac, providedIn: "root" });
var ScreenSizeService = _ScreenSizeService;

// src/app/sic-bo/coin-toss/coin-toss.service.ts
var _CoinTossService = class _CoinTossService {
  constructor(screenSize, zone) {
    this.screenSize = screenSize;
    this.zone = zone;
    this.spotAnimationName = {
      1: "oneRedThreeWhite",
      2: "twoRedTwoWhite",
      3: "threeRedOneWhite",
      4: "fourRed",
      0: "fourWhite",
      odd: "odd",
      even: "even"
    };
    CoinTossHistory.randomHistory();
    this.screenSubscription = this.screenSize.screen$.subscribe((screen) => {
      if (this.gameContainer && this.game) {
        this.game.view.width = screen.width;
        this.game.view.height = screen.height;
        this.game.screen.width = screen.width;
        this.game.screen.height = screen.height;
        this.gameContainer.iniSize();
      }
    });
  }
  init() {
    return __async(this, null, function* () {
      yield this.zone.runOutsideAngular(() => __async(this, null, function* () {
        this.game = new Application({
          width: this.screenSize.screenWidth,
          height: this.screenSize.screenHeight,
          backgroundAlpha: 0
        });
        this.game.ticker.add((delta) => {
          const now = Date.now();
          const remove = [];
          for (let i = 0; i < Tweening.tweening.length; i++) {
            const t = Tweening.tweening[i];
            const phase = Math.min(1, (now - t.start) / t.time);
            t.object[t.property] = Tweening.lerp(t.propertyBeginValue, t.target, t.easing(phase));
            if (t.change)
              t.change(t);
            if (phase === 1) {
              t.object[t.property] = t.target;
              t.object[t.animationName] = true;
              if (t.complete)
                t.complete(t);
              remove.push(t);
            }
          }
          for (let i = 0; i < remove.length; i++) {
            Tweening.tweening.splice(Tweening.tweening.indexOf(remove[i]), 1);
          }
        });
        this.assets = CoinTossAssets.getInstance();
        yield this.assets.loadSuccess$.pipe(take(1), delay(1)).toPromise();
        this.assets.gameAssets.coinToss.soundtrack.play({
          loop: true,
          singleInstance: true
        });
        this.gameContainer = new CoinTossContainer(this.game);
        setTimeout(() => {
          this.gameContainer.coinTossPlate.plateContainer.eventMode = "static";
          this.gameContainer.coinTossPlate.plateContainer.cursor = "pointer";
          let isAnimating = false;
          this.gameContainer.coinTossPlate.plateContainer.on("pointerdown", () => {
            if (isAnimating)
              return;
            isAnimating = true;
            this.gameContainer.coinTossPlate.coinContainer?.removeChildren();
            const red = CoinTossHistory.addRandomHistory(3e3);
            this.gameContainer.coinTossPlate.addCoin(4 - red, red);
            this.gameContainer.coinTossPlate.plateContainer.zIndex = CoinTossZIndex.plate.a;
            this.gameContainer.bettingSpotsContains.spotDefault();
            from(this.gameContainer.coinTossPlate.shake()).pipe(tap(() => {
              if ([0, 2, 4].indexOf(red) !== -1) {
                const sprite = this.gameContainer.bettingSpotsContains.spot01;
                this.gameContainer.bettingSpotsContains.AddSpotWinAnimationV2(sprite, 6e3).then();
              } else {
                const sprite = this.gameContainer.bettingSpotsContains.spot02;
                this.gameContainer.bettingSpotsContains.AddSpotWinAnimationV2(sprite, 6e3).then();
              }
              let spriteAnimation;
              switch (red) {
                case 4: {
                  spriteAnimation = this.gameContainer.bettingSpotsContains.spot03;
                  break;
                }
                case 3: {
                  spriteAnimation = this.gameContainer.bettingSpotsContains.spot05;
                  break;
                }
                case 2: {
                  spriteAnimation = this.gameContainer.bettingSpotsContains.spot06;
                  break;
                }
                case 1: {
                  spriteAnimation = this.gameContainer.bettingSpotsContains.spot07;
                  break;
                }
                case 0: {
                  spriteAnimation = this.gameContainer.bettingSpotsContains.spot04;
                  break;
                }
              }
              this.gameContainer.bettingSpotsContains.AddSpotWinAnimationV2(spriteAnimation, 6e3).then();
            }), switchMap((_) => this.gameContainer.coinTossPlate.reveal()), switchMap((_) => this.gameContainer.coinTossPlate.hidePlate01()), tap(() => {
              this.gameContainer.coinTossPlate.plateContainer.zIndex = CoinTossZIndex.plate.i;
              if ([0, 2, 4].indexOf(red) !== -1) {
                this.gameContainer.listCoinBet.coinToDealer(2);
              } else {
                this.gameContainer.listCoinBet.coinToDealer(1);
              }
              switch (red) {
                case 0: {
                  this.gameContainer.listCoinBet.coinToDealer([
                    3,
                    4,
                    5,
                    6
                  ]);
                  break;
                }
                case 1: {
                  this.gameContainer.listCoinBet.coinToDealer([
                    3,
                    4,
                    5,
                    7
                  ]);
                  break;
                }
                case 2: {
                  this.gameContainer.listCoinBet.coinToDealer([
                    3,
                    4,
                    6,
                    7
                  ]);
                  break;
                }
                case 3: {
                  this.gameContainer.listCoinBet.coinToDealer([
                    3,
                    5,
                    6,
                    7
                  ]);
                  break;
                }
                case 4: {
                  this.gameContainer.listCoinBet.coinToDealer([
                    4,
                    5,
                    6,
                    7
                  ]);
                  break;
                }
              }
            }), delay(2e3), tap(() => {
              let totalWin = 0;
              this.gameContainer.listCoinBet.listCoinBet.forEach((coin) => {
                if (coin.betPosition === 1 || coin.betPosition === 2)
                  totalWin += coin.amount * 1.96;
                else if (coin.betPosition === 3 || coin.betPosition === 7)
                  totalWin += coin.amount * 14.4;
                else if (coin.betPosition === 4 || coin.betPosition === 6)
                  totalWin += coin.amount * 3.75;
                else if (coin.betPosition === 5)
                  totalWin += coin.amount * 2.4;
              });
              if (this.gameContainer.listCoinBet.listCoinBet.length > 0 && totalWin) {
                const player = this.gameContainer.listCoinBet.listCoinBet[0].playerID;
                CoinTossWinAnimation(this.gameContainer.container, this.gameContainer.playerContainer.listPlayerContainer[player].myPlayerContainer, totalWin);
              }
            }), delay(100), tap(() => {
              if ([0, 2, 4].indexOf(red) !== -1) {
                this.gameContainer.listCoinBet.dealerToWinSpot(1);
              } else {
                this.gameContainer.listCoinBet.dealerToWinSpot(2);
              }
              switch (red) {
                case 0: {
                  this.gameContainer.listCoinBet.dealerToWinSpot(7);
                  break;
                }
                case 1: {
                  this.gameContainer.listCoinBet.dealerToWinSpot(6);
                  break;
                }
                case 2: {
                  this.gameContainer.listCoinBet.dealerToWinSpot(5);
                  break;
                }
                case 3: {
                  this.gameContainer.listCoinBet.dealerToWinSpot(4);
                  break;
                }
                case 4: {
                  this.gameContainer.listCoinBet.dealerToWinSpot(3);
                  break;
                }
              }
            }), delay(3e3), tap(() => {
              this.gameContainer.coinTossPlate.plateContainer.zIndex = CoinTossZIndex.plate.a;
            }), switchMap((_) => this.gameContainer.coinTossPlate.showPlate01()), switchMap((_) => this.gameContainer.coinTossPlate.reset())).subscribe((_) => {
              console.log("shake Done");
              isAnimating = false;
            });
          });
        }, 500);
      }));
    });
  }
  destroy() {
    return __async(this, null, function* () {
      sound.stopAll();
      this.screenSubscription?.unsubscribe();
      this.gameContainer?.destroy();
      this.game.destroy(true);
      this.gameContainer = null;
    });
  }
};
_CoinTossService.\u0275fac = function CoinTossService_Factory(t) {
  return new (t || _CoinTossService)(\u0275\u0275inject(ScreenSizeService), \u0275\u0275inject(NgZone));
};
_CoinTossService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CoinTossService, factory: _CoinTossService.\u0275fac, providedIn: "root" });
var CoinTossService = _CoinTossService;

// src/app/sic-bo/coin-toss/coin-toss-game.component.ts
var _c0 = ["gameContainer"];
var _CoinTossGameComponent = class _CoinTossGameComponent {
  constructor(coinTossService, renderer, zone) {
    this.coinTossService = coinTossService;
    this.renderer = renderer;
    this.zone = zone;
  }
  ngOnDestroy() {
    return __async(this, null, function* () {
      yield this.coinTossService.destroy();
      this.renderer.removeChild(this.gameContainer.nativeElement, this.coinTossService.game.view);
    });
  }
  ngOnInit() {
    return __async(this, null, function* () {
      yield this.zone.runOutsideAngular(() => __async(this, null, function* () {
        yield this.coinTossService.init();
        this.renderer.appendChild(this.gameContainer.nativeElement, this.coinTossService.game.view);
      }));
    });
  }
};
_CoinTossGameComponent.\u0275fac = function CoinTossGameComponent_Factory(t) {
  return new (t || _CoinTossGameComponent)(\u0275\u0275directiveInject(CoinTossService), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(NgZone));
};
_CoinTossGameComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CoinTossGameComponent, selectors: [["app-coin-toss-game"]], viewQuery: function CoinTossGameComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c0, 7);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.gameContainer = _t.first);
  }
}, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 2, vars: 0, consts: [[1, "game-container"], ["gameContainer", ""]], template: function CoinTossGameComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 0, 1);
  }
}, styles: ["\n\n.game-container[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 100vh;\n  overflow: hidden;\n  position: relative;\n  background-image: url(/assets/img/sb-background.jpg);\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center center;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2FwcC9zaWMtYm8vY29pbi10b3NzL2NvaW4tdG9zcy1nYW1lLmNvbXBvbmVudC5zY3NzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIuZ2FtZS1jb250YWluZXJ7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWcvc2ItYmFja2dyb3VuZC5qcGdcIik7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBQSxDQUFBO0FBQ0UsU0FBQTtBQUNBLFVBQUE7QUFDQSxZQUFBO0FBQ0EsWUFBQTtBQUNBLG9CQUFBO0FBQ0EscUJBQUE7QUFDQSxtQkFBQTtBQUNBLHVCQUFBLE9BQUE7QUFDQSxjQUFBOzsiLAogICJuYW1lcyI6IFtdCn0K */"] });
var CoinTossGameComponent = _CoinTossGameComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CoinTossGameComponent, { className: "CoinTossGameComponent", filePath: "src\\app\\sic-bo\\coin-toss\\coin-toss-game.component.ts", lineNumber: 19 });
})();

// src/app/sic-bo/coin-toss/coin-toss.component.ts
var _CoinTossComponent = class _CoinTossComponent {
};
_CoinTossComponent.\u0275fac = function CoinTossComponent_Factory(t) {
  return new (t || _CoinTossComponent)();
};
_CoinTossComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CoinTossComponent, selectors: [["app-coin-toss"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 0, template: function CoinTossComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-coin-toss-game");
  }
}, dependencies: [CoinTossGameComponent], styles: ["\n\n/*# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFtdLAogICJzb3VyY2VzQ29udGVudCI6IFtdLAogICJtYXBwaW5ncyI6ICIiLAogICJuYW1lcyI6IFtdCn0K */"] });
var CoinTossComponent = _CoinTossComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CoinTossComponent, { className: "CoinTossComponent", filePath: "src\\app\\sic-bo\\coin-toss\\coin-toss.component.ts", lineNumber: 11 });
})();
export {
  CoinTossComponent
};
//# sourceMappingURL=chunk-MER3MS4G.js.map
