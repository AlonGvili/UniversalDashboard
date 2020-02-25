(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ 420:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: D:/GPM/github.com/AlonGvili/UniversalDashboard/node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(126);

// EXTERNAL MODULE: D:/GPM/github.com/AlonGvili/UniversalDashboard/node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(44);

// EXTERNAL MODULE: D:/GPM/github.com/AlonGvili/UniversalDashboard/node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(45);

// EXTERNAL MODULE: D:/GPM/github.com/AlonGvili/UniversalDashboard/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__(47);

// EXTERNAL MODULE: D:/GPM/github.com/AlonGvili/UniversalDashboard/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(46);

// EXTERNAL MODULE: D:/GPM/github.com/AlonGvili/UniversalDashboard/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(162);

// EXTERNAL MODULE: D:/GPM/github.com/AlonGvili/UniversalDashboard/node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__(48);

// EXTERNAL MODULE: D:/GPM/github.com/AlonGvili/UniversalDashboard/node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(161);

// EXTERNAL MODULE: D:/GPM/github.com/AlonGvili/UniversalDashboard/node_modules/react/index.js
var react = __webpack_require__(1);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: D:/GPM/github.com/AlonGvili/UniversalDashboard/node_modules/@fortawesome/fontawesome-svg-core/index.es.js
var index_es = __webpack_require__(549);

// EXTERNAL MODULE: D:/GPM/github.com/AlonGvili/UniversalDashboard/node_modules/@fortawesome/react-fontawesome/index.es.js
var react_fontawesome_index_es = __webpack_require__(553);

// CONCATENATED MODULE: ./lib/faSolid.jsx
var faSolid = ['faAd', 'faAddressBook', 'faAddressCard', 'faAdjust', 'faAirFreshener', 'faAlignCenter', 'faAlignJustify', 'faAlignLeft', 'faAlignRight', 'faAllergies', 'faAmbulance', 'faAmericanSignLanguageInterpreting', 'faAnchor', 'faAngleDoubleDown', 'faAngleDoubleLeft', 'faAngleDoubleRight', 'faAngleDoubleUp', 'faAngleDown', 'faAngleLeft', 'faAngleRight', 'faAngleUp', 'faAngry', 'faAnkh', 'faAppleAlt', 'faArchive', 'faArchway', 'faArrowAltCircleDown', 'faArrowAltCircleLeft', 'faArrowAltCircleRight', 'faArrowAltCircleUp', 'faArrowCircleDown', 'faArrowCircleLeft', 'faArrowCircleRight', 'faArrowCircleUp', 'faArrowDown', 'faArrowLeft', 'faArrowRight', 'faArrowsAlt', 'faArrowsAltH', 'faArrowsAltV', 'faArrowUp', 'faAssistiveListeningSystems', 'faAsterisk', 'faAt', 'faAtlas', 'faAtom', 'faAudioDescription', 'faAward', 'faBaby', 'faBabyCarriage', 'faBackspace', 'faBackward', 'faBalanceScale', 'faBan', 'faBandAid', 'faBarcode', 'faBars', 'faBaseballBall', 'faBasketballBall', 'faBath', 'faBatteryEmpty', 'faBatteryFull', 'faBatteryHalf', 'faBatteryQuarter', 'faBatteryThreeQuarters', 'faBed', 'faBeer', 'faBell', 'faBellSlash', 'faBezierCurve', 'faBible', 'faBicycle', 'faBinoculars', 'faBiohazard', 'faBirthdayCake', 'faBlender', 'faBlenderPhone', 'faBlind', 'faBlog', 'faBold', 'faBolt', 'faBomb', 'faBone', 'faBong', 'faBook', 'faBookDead', 'faBookmark', 'faBookOpen', 'faBookReader', 'faBowlingBall', 'faBox', 'faBoxes', 'faBoxOpen', 'faBraille', 'faBrain', 'faBriefcase', 'faBriefcaseMedical', 'faBroadcastTower', 'faBroom', 'faBrush', 'faBug', 'faBuilding', 'faBullhorn', 'faBullseye', 'faBurn', 'faBus', 'faBusAlt', 'faBusinessTime', 'faCalculator', 'faCalendar', 'faCalendarAlt', 'faCalendarCheck', 'faCalendarDay', 'faCalendarMinus', 'faCalendarPlus', 'faCalendarTimes', 'faCalendarWeek', 'faCamera', 'faCameraRetro', 'faCampground', 'faCandyCane', 'faCannabis', 'faCapsules', 'faCar', 'faCarAlt', 'faCarBattery', 'faCarCrash', 'faCaretDown', 'faCaretLeft', 'faCaretRight', 'faCaretSquareDown', 'faCaretSquareLeft', 'faCaretSquareRight', 'faCaretSquareUp', 'faCaretUp', 'faCarrot', 'faCarSide', 'faCartArrowDown', 'faCartPlus', 'faCashRegister', 'faCat', 'faCertificate', 'faChair', 'faChalkboard', 'faChalkboardTeacher', 'faChargingStation', 'faChartArea', 'faChartBar', 'faChartLine', 'faChartPie', 'faCheck', 'faCheckCircle', 'faCheckDouble', 'faCheckSquare', 'faChess', 'faChessBishop', 'faChessBoard', 'faChessKing', 'faChessKnight', 'faChessPawn', 'faChessQueen', 'faChessRook', 'faChevronCircleDown', 'faChevronCircleLeft', 'faChevronCircleRight', 'faChevronCircleUp', 'faChevronDown', 'faChevronLeft', 'faChevronRight', 'faChevronUp', 'faChild', 'faChurch', 'faCircle', 'faCircleNotch', 'faCity', 'faClipboard', 'faClipboardCheck', 'faClipboardList', 'faClock', 'faClone', 'faClosedCaptioning', 'faCloud', 'faCloudDownloadAlt', 'faCloudMeatball', 'faCloudMoon', 'faCloudMoonRain', 'faCloudRain', 'faCloudShowersHeavy', 'faCloudSun', 'faCloudSunRain', 'faCloudUploadAlt', 'faCocktail', 'faCode', 'faCodeBranch', 'faCoffee', 'faCog', 'faCogs', 'faCoins', 'faColumns', 'faComment', 'faCommentAlt', 'faCommentDollar', 'faCommentDots', 'faComments', 'faCommentsDollar', 'faCommentSlash', 'faCompactDisc', 'faCompass', 'faCompress', 'faCompressArrowsAlt', 'faConciergeBell', 'faCookie', 'faCookieBite', 'faCopy', 'faCopyright', 'faCouch', 'faCreditCard', 'faCrop', 'faCropAlt', 'faCross', 'faCrosshairs', 'faCrow', 'faCrown', 'faCube', 'faCubes', 'faCut', 'faDatabase', 'faDeaf', 'faDemocrat', 'faDesktop', 'faDharmachakra', 'faDiagnoses', 'faDice', 'faDiceD20', 'faDiceD6', 'faDiceFive', 'faDiceFour', 'faDiceOne', 'faDiceSix', 'faDiceThree', 'faDiceTwo', 'faDigitalTachograph', 'faDirections', 'faDivide', 'faDizzy', 'faDna', 'faDog', 'faDollarSign', 'faDolly', 'faDollyFlatbed', 'faDonate', 'faDoorClosed', 'faDoorOpen', 'faDotCircle', 'faDove', 'faDownload', 'faDraftingCompass', 'faDragon', 'faDrawPolygon', 'faDrum', 'faDrumSteelpan', 'faDrumstickBite', 'faDumbbell', 'faDumpster', 'faDumpsterFire', 'faDungeon', 'faEdit', 'faEject', 'faEllipsisH', 'faEllipsisV', 'faEnvelope', 'faEnvelopeOpen', 'faEnvelopeOpenText', 'faEnvelopeSquare', 'faEquals', 'faEraser', 'faEthernet', 'faEuroSign', 'faExchangeAlt', 'faExclamation', 'faExclamationCircle', 'faExclamationTriangle', 'faExpand', 'faExpandArrowsAlt', 'faExternalLinkAlt', 'faExternalLinkSquareAlt', 'faEye', 'faEyeDropper', 'faEyeSlash', 'faFastBackward', 'faFastForward', 'faFax', 'faFeather', 'faFeatherAlt', 'faFemale', 'faFighterJet', 'faFile', 'faFileAlt', 'faFileArchive', 'faFileAudio', 'faFileCode', 'faFileContract', 'faFileCsv', 'faFileDownload', 'faFileExcel', 'faFileExport', 'faFileImage', 'faFileImport', 'faFileInvoice', 'faFileInvoiceDollar', 'faFileMedical', 'faFileMedicalAlt', 'faFilePdf', 'faFilePowerpoint', 'faFilePrescription', 'faFileSignature', 'faFileUpload', 'faFileVideo', 'faFileWord', 'faFill', 'faFillDrip', 'faFilm', 'faFilter', 'faFingerprint', 'faFire', 'faFireAlt', 'faFireExtinguisher', 'faFirstAid', 'faFish', 'faFistRaised', 'faFlag', 'faFlagCheckered', 'faFlagUsa', 'faFlask', 'faFlushed', 'faFolder', 'faFolderMinus', 'faFolderOpen', 'faFolderPlus', 'faFont', 'faFontAwesomeLogoFull', 'faFootballBall', 'faForward', 'faFrog', 'faFrown', 'faFrownOpen', 'faFunnelDollar', 'faFutbol', 'faGamepad', 'faGasPump', 'faGavel', 'faGem', 'faGenderless', 'faGhost', 'faGift', 'faGifts', 'faGlassCheers', 'faGlasses', 'faGlassMartini', 'faGlassMartiniAlt', 'faGlassWhiskey', 'faGlobe', 'faGlobeAfrica', 'faGlobeAmericas', 'faGlobeAsia', 'faGlobeEurope', 'faGolfBall', 'faGopuram', 'faGraduationCap', 'faGreaterThan', 'faGreaterThanEqual', 'faGrimace', 'faGrin', 'faGrinAlt', 'faGrinBeam', 'faGrinBeamSweat', 'faGrinHearts', 'faGrinSquint', 'faGrinSquintTears', 'faGrinStars', 'faGrinTears', 'faGrinTongue', 'faGrinTongueSquint', 'faGrinTongueWink', 'faGrinWink', 'faGripHorizontal', 'faGripLines', 'faGripLinesVertical', 'faGripVertical', 'faGuitar', 'faHammer', 'faHamsa', 'faHandHolding', 'faHandHoldingHeart', 'faHandHoldingUsd', 'faHandLizard', 'faHandPaper', 'faHandPeace', 'faHandPointDown', 'faHandPointer', 'faHandPointLeft', 'faHandPointRight', 'faHandPointUp', 'faHandRock', 'faHands', 'faHandScissors', 'faHandshake', 'faHandsHelping', 'faHandSpock', 'faHanukiah', 'faHashtag', 'faHatWizard', 'faHaykal', 'faHdd', 'faHeading', 'faHeadphones', 'faHeadphonesAlt', 'faHeadset', 'faHeart', 'faHeartbeat', 'faHeartBroken', 'faHelicopter', 'faHighlighter', 'faHiking', 'faHippo', 'faHistory', 'faHockeyPuck', 'faHollyBerry', 'faHome', 'faHorse', 'faHorseHead', 'faHospital', 'faHospitalAlt', 'faHospitalSymbol', 'faHotel', 'faHotTub', 'faHourglass', 'faHourglassEnd', 'faHourglassHalf', 'faHourglassStart', 'faHouseDamage', 'faHryvnia', 'faHSquare', 'faIcicles', 'faICursor', 'faIdBadge', 'faIdCard', 'faIdCardAlt', 'faIgloo', 'faImage', 'faImages', 'faInbox', 'faIndent', 'faIndustry', 'faInfinity', 'faInfo', 'faInfoCircle', 'faItalic', 'faJedi', 'faJoint', 'faJournalWhills', 'faKaaba', 'faKey', 'faKeyboard', 'faKhanda', 'faKiss', 'faKissBeam', 'faKissWinkHeart', 'faKiwiBird', 'faLandmark', 'faLanguage', 'faLaptop', 'faLaptopCode', 'faLaugh', 'faLaughBeam', 'faLaughSquint', 'faLaughWink', 'faLayerGroup', 'faLeaf', 'faLemon', 'faLessThan', 'faLessThanEqual', 'faLevelDownAlt', 'faLevelUpAlt', 'faLifeRing', 'faLightbulb', 'faLink', 'faLiraSign', 'faList', 'faListAlt', 'faListOl', 'faListUl', 'faLocationArrow', 'faLock', 'faLockOpen', 'faLongArrowAltDown', 'faLongArrowAltLeft', 'faLongArrowAltRight', 'faLongArrowAltUp', 'faLowVision', 'faLuggageCart', 'faMagic', 'faMagnet', 'faMailBulk', 'faMale', 'faMap', 'faMapMarked', 'faMapMarkedAlt', 'faMapMarker', 'faMapMarkerAlt', 'faMapPin', 'faMapSigns', 'faMarker', 'faMars', 'faMarsDouble', 'faMarsStroke', 'faMarsStrokeH', 'faMarsStrokeV', 'faMask', 'faMedal', 'faMedkit', 'faMeh', 'faMehBlank', 'faMehRollingEyes', 'faMemory', 'faMenorah', 'faMercury', 'faMeteor', 'faMicrochip', 'faMicrophone', 'faMicrophoneAlt', 'faMicrophoneAltSlash', 'faMicrophoneSlash', 'faMicroscope', 'faMinus', 'faMinusCircle', 'faMinusSquare', 'faMitten', 'faMobile', 'faMobileAlt', 'faMoneyBill', 'faMoneyBillAlt', 'faMoneyBillWave', 'faMoneyBillWaveAlt', 'faMoneyCheck', 'faMoneyCheckAlt', 'faMonument', 'faMoon', 'faMortarPestle', 'faMosque', 'faMotorcycle', 'faMountain', 'faMousePointer', 'faMugHot', 'faMusic', 'faNetworkWired', 'faNeuter', 'faNewspaper', 'faNotEqual', 'faNotesMedical', 'faObjectGroup', 'faObjectUngroup', 'faOilCan', 'faOm', 'faOtter', 'faOutdent', 'faPaintBrush', 'faPaintRoller', 'faPalette', 'faPallet', 'faPaperclip', 'faPaperPlane', 'faParachuteBox', 'faParagraph', 'faParking', 'faPassport', 'faPastafarianism', 'faPaste', 'faPause', 'faPauseCircle', 'faPaw', 'faPeace', 'faPen', 'faPenAlt', 'faPencilAlt', 'faPencilRuler', 'faPenFancy', 'faPenNib', 'faPenSquare', 'faPeopleCarry', 'faPercent', 'faPercentage', 'faPersonBooth', 'faPhone', 'faPhoneSlash', 'faPhoneSquare', 'faPhoneVolume', 'faPiggyBank', 'faPills', 'faPlaceOfWorship', 'faPlane', 'faPlaneArrival', 'faPlaneDeparture', 'faPlay', 'faPlayCircle', 'faPlug', 'faPlus', 'faPlusCircle', 'faPlusSquare', 'faPodcast', 'faPoll', 'faPollH', 'faPoo', 'faPoop', 'faPooStorm', 'faPortrait', 'faPoundSign', 'faPowerOff', 'faPray', 'faPrayingHands', 'faPrescription', 'faPrescriptionBottle', 'faPrescriptionBottleAlt', 'faPrint', 'faProcedures', 'faProjectDiagram', 'faPuzzlePiece', 'faQrcode', 'faQuestion', 'faQuestionCircle', 'faQuidditch', 'faQuoteLeft', 'faQuoteRight', 'faQuran', 'faRadiation', 'faRadiationAlt', 'faRainbow', 'faRandom', 'faReceipt', 'faRecycle', 'faRedo', 'faRedoAlt', 'faRegistered', 'faReply', 'faReplyAll', 'faRepublican', 'faRestroom', 'faRetweet', 'faRibbon', 'faRing', 'faRoad', 'faRobot', 'faRocket', 'faRoute', 'faRss', 'faRssSquare', 'faRubleSign', 'faRuler', 'faRulerCombined', 'faRulerHorizontal', 'faRulerVertical', 'faRunning', 'faRupeeSign', 'faSadCry', 'faSadTear', 'faSatellite', 'faSatelliteDish', 'faSave', 'faSchool', 'faScrewdriver', 'faScroll', 'faSdCard', 'faSearch', 'faSearchDollar', 'faSearchLocation', 'faSearchMinus', 'faSearchPlus', 'faSeedling', 'faServer', 'faShapes', 'faShare', 'faShareAlt', 'faShareAltSquare', 'faShareSquare', 'faShekelSign', 'faShieldAlt', 'faShip', 'faShippingFast', 'faShoePrints', 'faShoppingBag', 'faShoppingBasket', 'faShoppingCart', 'faShower', 'faShuttleVan', 'faSign', 'faSignal', 'faSignature', 'faSignInAlt', 'faSignLanguage', 'faSignOutAlt', 'faSimCard', 'faSitemap', 'faSkating', 'faSkiing', 'faSkiingNordic', 'faSkull', 'faSkullCrossbones', 'faSlash', 'faSleigh', 'faSlidersH', 'faSmile', 'faSmileBeam', 'faSmileWink', 'faSmog', 'faSmoking', 'faSmokingBan', 'faSms', 'faSnowboarding', 'faSnowflake', 'faSnowman', 'faSnowplow', 'faSocks', 'faSolarPanel', 'faSort', 'faSortAlphaDown', 'faSortAlphaUp', 'faSortAmountDown', 'faSortAmountUp', 'faSortDown', 'faSortNumericDown', 'faSortNumericUp', 'faSortUp', 'faSpa', 'faSpaceShuttle', 'faSpider', 'faSpinner', 'faSplotch', 'faSprayCan', 'faSquare', 'faSquareFull', 'faSquareRootAlt', 'faStamp', 'faStar', 'faStarAndCrescent', 'faStarHalf', 'faStarHalfAlt', 'faStarOfDavid', 'faStarOfLife', 'faStepBackward', 'faStepForward', 'faStethoscope', 'faStickyNote', 'faStop', 'faStopCircle', 'faStopwatch', 'faStore', 'faStoreAlt', 'faStream', 'faStreetView', 'faStrikethrough', 'faStroopwafel', 'faSubscript', 'faSubway', 'faSuitcase', 'faSuitcaseRolling', 'faSun', 'faSuperscript', 'faSurprise', 'faSwatchbook', 'faSwimmer', 'faSwimmingPool', 'faSynagogue', 'faSync', 'faSyncAlt', 'faSyringe', 'faTable', 'faTablet', 'faTabletAlt', 'faTableTennis', 'faTablets', 'faTachometerAlt', 'faTag', 'faTags', 'faTape', 'faTasks', 'faTaxi', 'faTeeth', 'faTeethOpen', 'faTemperatureHigh', 'faTemperatureLow', 'faTenge', 'faTerminal', 'faTextHeight', 'faTextWidth', 'faTh', 'faTheaterMasks', 'faThermometer', 'faThermometerEmpty', 'faThermometerFull', 'faThermometerHalf', 'faThermometerQuarter', 'faThermometerThreeQuarters', 'faThLarge', 'faThList', 'faThumbsDown', 'faThumbsUp', 'faThumbtack', 'faTicketAlt', 'faTimes', 'faTimesCircle', 'faTint', 'faTintSlash', 'faTired', 'faToggleOff', 'faToggleOn', 'faToilet', 'faToiletPaper', 'faToolbox', 'faTools', 'faTooth', 'faTorah', 'faToriiGate', 'faTractor', 'faTrademark', 'faTrafficLight', 'faTrain', 'faTram', 'faTransgender', 'faTransgenderAlt', 'faTrash', 'faTrashAlt', 'faTree', 'faTrophy', 'faTruck', 'faTruckLoading', 'faTruckMonster', 'faTruckMoving', 'faTruckPickup', 'faTshirt', 'faTty', 'faTv', 'faUmbrella', 'faUmbrellaBeach', 'faUnderline', 'faUndo', 'faUndoAlt', 'faUniversalAccess', 'faUniversity', 'faUnlink', 'faUnlock', 'faUnlockAlt', 'faUpload', 'faUser', 'faUserAlt', 'faUserAltSlash', 'faUserAstronaut', 'faUserCheck', 'faUserCircle', 'faUserClock', 'faUserCog', 'faUserEdit', 'faUserFriends', 'faUserGraduate', 'faUserInjured', 'faUserLock', 'faUserMd', 'faUserMinus', 'faUserNinja', 'faUserPlus', 'faUsers', 'faUsersCog', 'faUserSecret', 'faUserShield', 'faUserSlash', 'faUserTag', 'faUserTie', 'faUserTimes', 'faUtensils', 'faUtensilSpoon', 'faVectorSquare', 'faVenus', 'faVenusDouble', 'faVenusMars', 'faVial', 'faVials', 'faVideo', 'faVideoSlash', 'faVihara', 'faVolleyballBall', 'faVolumeDown', 'faVolumeMute', 'faVolumeOff', 'faVolumeUp', 'faVoteYea', 'faVrCardboard', 'faWalking', 'faWallet', 'faWarehouse', 'faWater', 'faWeight', 'faWeightHanging', 'faWheelchair', 'faWifi', 'faWind', 'faWindowClose', 'faWindowMaximize', 'faWindowMinimize', 'faWindowRestore', 'faWineBottle', 'faWineGlass', 'faWineGlassAlt', 'faWonSign', 'faWrench', 'faXRay', 'faYenSign', 'faYinYang'];
function findSolidIcon(iconName) {
  return faSolid.includes(iconName);
}
// CONCATENATED MODULE: ./lib/faRegular.jsx
var faRegular = ['faAddressBook', 'faAddressCard', 'faAngry', 'faArrowAltCircleDown', 'faArrowAltCircleLeft', 'faArrowAltCircleRight', 'faArrowAltCircleUp', 'faBell', 'faBellSlash', 'faBookmark', 'faBuilding', 'faCalendar', 'faCalendarAlt', 'faCalendarCheck', 'faCalendarMinus', 'faCalendarPlus', 'faCalendarTimes', 'faCaretSquareDown', 'faCaretSquareLeft', 'faCaretSquareRight', 'faCaretSquareUp', 'faChartBar', 'faCheckCircle', 'faCheckSquare', 'faCircle', 'faClipboard', 'faClock', 'faClone', 'faClosedCaptioning', 'faComment', 'faCommentAlt', 'faCommentDots', 'faComments', 'faCompass', 'faCopy', 'faCopyright', 'faCreditCard', 'faDizzy', 'faDotCircle', 'faEdit', 'faEnvelope', 'faEnvelopeOpen', 'faEye', 'faEyeSlash', 'faFile', 'faFileAlt', 'faFileArchive', 'faFileAudio', 'faFileCode', 'faFileExcel', 'faFileImage', 'faFilePdf', 'faFilePowerpoint', 'faFileVideo', 'faFileWord', 'faFlag', 'faFlushed', 'faFolder', 'faFolderOpen', 'faFontAwesomeLogoFull', 'faFrown', 'faFrownOpen', 'faFutbol', 'faGem', 'faGrimace', 'faGrin', 'faGrinAlt', 'faGrinBeam', 'faGrinBeamSweat', 'faGrinHearts', 'faGrinSquint', 'faGrinSquintTears', 'faGrinStars', 'faGrinTears', 'faGrinTongue', 'faGrinTongueSquint', 'faGrinTongueWink', 'faGrinWink', 'faHandLizard', 'faHandPaper', 'faHandPeace', 'faHandPointDown', 'faHandPointer', 'faHandPointLeft', 'faHandPointRight', 'faHandPointUp', 'faHandRock', 'faHandScissors', 'faHandshake', 'faHandSpock', 'faHdd', 'faHeart', 'faHospital', 'faHourglass', 'faIdBadge', 'faIdCard', 'faImage', 'faImages', 'faKeyboard', 'faKiss', 'faKissBeam', 'faKissWinkHeart', 'faLaugh', 'faLaughBeam', 'faLaughSquint', 'faLaughWink', 'faLemon', 'faLifeRing', 'faLightbulb', 'faListAlt', 'faMap', 'faMeh', 'faMehBlank', 'faMehRollingEyes', 'faMinusSquare', 'faMoneyBillAlt', 'faMoon', 'faNewspaper', 'faObjectGroup', 'faObjectUngroup', 'faPaperPlane', 'faPauseCircle', 'faPlayCircle', 'faPlusSquare', 'faQuestionCircle', 'faRegistered', 'faSadCry', 'faSadTear', 'faSave', 'faShareSquare', 'faSmile', 'faSmileBeam', 'faSmileWink', 'faSnowflake', 'faSquare', 'faStar', 'faStarHalf', 'faStickyNote', 'faStopCircle', 'faSun', 'faSurprise', 'faThumbsDown', 'faThumbsUp', 'faTimesCircle', 'faTired', 'faTrashAlt', 'faUser', 'faUserCircle', 'faWindowClose', 'faWindowMaximize', 'faWindowMinimize', 'faWindowRestore'];
function findRegularIcon(iconName) {
  return faRegular.includes(iconName);
}
// EXTERNAL MODULE: D:/GPM/github.com/AlonGvili/UniversalDashboard/node_modules/classnames/index.js
var classnames = __webpack_require__(179);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// CONCATENATED MODULE: ./lib/ud-icon.jsx
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ud_icon_UDIcon; });















var ud_icon_UDIcon =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(UDIcon, _React$Component);

  function UDIcon(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, UDIcon);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(UDIcon).call(this, props));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "setFontAwesomeIcon", function (faIcon) {
      var i = null;
      var name = "fa".concat(faIcon);
      _this.props.regular && findRegularIcon(name) === true ? __webpack_require__.e(/* import() */ 9).then(__webpack_require__.bind(null, 554)).then(function (_ref) {
        var far = _ref.far;
        var fai = Object(index_es["a" /* icon */])(far[name]);
        i = fai;

        _this.setState(Object(objectSpread2["a" /* default */])({}, _this.props, {
          icon: i
        }));
      }) : findSolidIcon(name) === true ? __webpack_require__.e(/* import() */ 10).then(__webpack_require__.bind(null, 555)).then(function (_ref2) {
        var fas = _ref2.fas;
        var fai = Object(index_es["a" /* icon */])(fas[name]);
        i = fai;

        _this.setState(Object(objectSpread2["a" /* default */])({}, _this.props, {
          icon: i
        }));
      }) : __webpack_require__.e(/* import() */ 8).then(__webpack_require__.bind(null, 556)).then(function (_ref3) {
        var fab = _ref3.fab;
        var fai = Object(index_es["a" /* icon */])(fab[name]);
        i = fai;

        _this.setState(Object(objectSpread2["a" /* default */])({}, _this.props, {
          icon: i
        }));
      });
    });

    _this.state = {
      icon: ''
    };
    return _this;
  }

  Object(createClass["a" /* default */])(UDIcon, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.setFontAwesomeIcon(this.props.icon);
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(newProps) {
      this.setFontAwesomeIcon(newProps.icon);
    }
  }, {
    key: "render",
    value: function render() {
      return react_default.a.createElement(react_fontawesome_index_es["a" /* FontAwesomeIcon */], Object.assign({
        className: classnames_default()(this.props.className, "ud-mu-icon")
      }, this.props, {
        icon: this.state.icon,
        "data-tooltip": this.props.dataTooltip
      }));
    }
  }]);

  return UDIcon;
}(react_default.a.Component);



/***/ })

}]);
//# sourceMappingURL=ud-icon.64d4ea140c7df64fdc2a.bundle.map