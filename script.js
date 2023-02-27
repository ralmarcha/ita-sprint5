var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _a;
var _this = this;
//dad jokes
var header = {
    method: 'GET',
    headers: {
        Accept: 'application/json'
    }
};
var loadJoke = function () { return __awaiter(_this, void 0, void 0, function () {
    var dadJoke, data;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, fetch('https://icanhazdadjoke.com', header)];
            case 1:
                dadJoke = _b.sent();
                return [4 /*yield*/, dadJoke.json()];
            case 2:
                data = _b.sent();
                (_a = document.getElementById('loading')) === null || _a === void 0 ? void 0 : _a.innerHTML = data.joke;
                return [2 /*return*/];
        }
    });
}); };
//chuck Norris Jokes
function chuckJoke() {
    var _a;
    return __awaiter(this, void 0, void 0, function () {
        var data, json;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, fetch('https://api.chucknorris.io/jokes/random')];
                case 1:
                    data = _b.sent();
                    return [4 /*yield*/, data.json()];
                case 2:
                    json = _b.sent();
                    (_a = document.getElementById('loading')) === null || _a === void 0 ? void 0 : _a.innerHTML = json.value;
                    return [2 /*return*/];
            }
        });
    });
}
//alternar
function showRandomJoke() {
    var option = Math.round(Math.random() * 10);
    var random = (option > 5) ? chuckJoke() : loadJoke();
}
(_a = document.getElementById("acudit")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", showRandomJoke);
//meteo
var lat = 41.3828939;
var lon = 2.1774322;
var appId = '3356a3346fdf41242690eef93099bd6f';
var url = "https://api.openweathermap.org/data/2.5/weather?lat=".concat(lat, "&lon=").concat(lon, "&appid=").concat(appId);
var city = "Barcelona";
var countryCode = "ES";
var url2 = "http://api.openweathermap.org/geo/1.0/direct?q=".concat(city, ",").concat(countryCode, "&appid=").concat(appId);
var mostrarCiudad = function () { return __awaiter(_this, void 0, void 0, function () {
    var res, data2, name;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, fetch(url2)];
            case 1:
                res = _b.sent();
                return [4 /*yield*/, res.json()];
            case 2:
                data2 = _b.sent();
                name = data2[0].name;
                (_a = document.getElementById('ciudad')) === null || _a === void 0 ? void 0 : _a.innerHTML = name;
                return [2 /*return*/];
        }
    });
}); };
var mostrarClima = function () { return __awaiter(_this, void 0, void 0, function () {
    var res, data, temp, weather, icon, centigrados;
    var _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4 /*yield*/, fetch(url)];
            case 1:
                res = _c.sent();
                return [4 /*yield*/, res.json()];
            case 2:
                data = _c.sent();
                temp = data.main.temp;
                weather = data.weather;
                icon = "https://openweathermap.org/img/wn/".concat(weather[0]["icon"], "@2x.png");
                centigrados = "".concat((temp - 273.15).toFixed(0), " \u00BAC");
                (_a = document.getElementById('temperatura')) === null || _a === void 0 ? void 0 : _a.innerHTML = centigrados;
                (_b = document.getElementById('icon')) === null || _b === void 0 ? void 0 : _b.src = icon;
                return [2 /*return*/];
        }
    });
}); };
//score
var d = new Date();
var dateToday = d.toISOString();
var reportAcudits = [];
var puntuar = function (score) {
    var _a;
    var report = {
        joke: (_a = document.getElementById('loading')) === null || _a === void 0 ? void 0 : _a.innerHTML,
        score: score,
        date: dateToday
    };
    reportAcudits.push(report);
    console.log("score", reportAcudits);
};
