
const RAW_DATA = {
    "volume": {
        "data": [
            // { "underlying": "HDFCBANK", "identifier": "FUTSTKHDFCBANK30-12-2025XX0.00", "instrumentType": "FUTSTK", "instrument": "Stock Futures", "expiryDate": "30-Dec-2025", "optionType": "-", "strikePrice": 0, "lastPrice": 996.3, "pChange": -0.16033670708487824, "openPrice": 996.2, "highPrice": 1000.8, "lowPrice": 994.3, "numberOfContractsTraded": 82333, "totalTurnover": 451758.289345, "premiumTurnover": 45175828934.5, "openInterest": 191258, "underlyingValue": 995.3 },
            // { "underlying": "HDFCBANK", "identifier": "FUTSTKHDFCBANK27-01-2026XX0.00", "instrumentType": "FUTSTK", "instrument": "Stock Futures", "expiryDate": "27-Jan-2026", "optionType": "-", "strikePrice": 0, "lastPrice": 1002.9, "pChange": -0.1692215807286482, "openPrice": 1003.2, "highPrice": 1007.5, "lowPrice": 1001, "numberOfContractsTraded": 75352, "totalTurnover": 416255.37404, "premiumTurnover": 41625537404, "openInterest": 219539, "underlyingValue": 995.3 },
            // { "underlying": "TCS", "identifier": "FUTSTKTCS30-12-2025XX0.00", "instrumentType": "FUTSTK", "instrument": "Stock Futures", "expiryDate": "30-Dec-2025", "optionType": "-", "strikePrice": 0, "lastPrice": 3319.5, "pChange": 0.32944447802696003, "openPrice": 3299.4, "highPrice": 3329.1, "lowPrice": 3292.9, "numberOfContractsTraded": 45835, "totalTurnover": 265512.8734125, "premiumTurnover": 26551287341.25, "openInterest": 88220, "underlyingValue": 3313.1 },
            // { "underlying": "NIFTY", "identifier": "FUTIDXNIFTY30-12-2025XX0.00", "instrumentType": "FUTIDX", "instrument": "Index Futures", "expiryDate": "30-Dec-2025", "optionType": "-", "strikePrice": 0, "lastPrice": 26164.1, "pChange": -0.16331576798476738, "openPrice": 26228, "highPrice": 26269.7, "lowPrice": 26151.7, "numberOfContractsTraded": 44130, "totalTurnover": 867225.9906, "premiumTurnover": 86722599060, "openInterest": 167636, "underlyingValue": 26142.1 },
            // { "underlying": "INFY", "identifier": "FUTSTKINFY30-12-2025XX0.00", "instrumentType": "FUTSTK", "instrument": "Stock Futures", "expiryDate": "30-Dec-2025", "optionType": "-", "strikePrice": 0, "lastPrice": 1660.6, "pChange": -0.16832992665624624, "openPrice": 1664, "highPrice": 1664, "lowPrice": 1648.8, "numberOfContractsTraded": 43354, "totalTurnover": 287334.70456, "premiumTurnover": 28733470456, "openInterest": 92762, "underlyingValue": 1667 },
            // { "underlying": "TCS", "identifier": "FUTSTKTCS27-01-2026XX0.00", "instrumentType": "FUTSTK", "instrument": "Stock Futures", "expiryDate": "27-Jan-2026", "optionType": "-", "strikePrice": 0, "lastPrice": 3323, "pChange": -0.042112862471423415, "openPrice": 3316, "highPrice": 3326.8, "lowPrice": 3303, "numberOfContractsTraded": 40978, "totalTurnover": 237487.691665, "premiumTurnover": 23748769166.5, "openInterest": 51398, "underlyingValue": 3313.1 },
            // { "underlying": "INFY", "identifier": "FUTSTKINFY27-01-2026XX0.00", "instrumentType": "FUTSTK", "instrument": "Stock Futures", "expiryDate": "27-Jan-2026", "optionType": "-", "strikePrice": 0, "lastPrice": 1670.9, "pChange": -0.25073129962390306, "openPrice": 1668, "highPrice": 1674.5, "lowPrice": 1660.4, "numberOfContractsTraded": 40633, "totalTurnover": 271113.12792, "premiumTurnover": 27111312792, "openInterest": 114701, "underlyingValue": 1667 },
            // { "underlying": "RELIANCE", "identifier": "FUTSTKRELIANCE30-12-2025XX0.00", "instrumentType": "FUTSTK", "instrument": "Stock Futures", "expiryDate": "30-Dec-2025", "optionType": "-", "strikePrice": 0, "lastPrice": 1560, "pChange": -0.7507316452474869, "openPrice": 1574, "highPrice": 1574.8, "lowPrice": 1556, "numberOfContractsTraded": 39648, "totalTurnover": 309983.9232, "premiumTurnover": 30998392320, "openInterest": 94753, "underlyingValue": 1560.6 },
            // { "underlying": "RELIANCE", "identifier": "FUTSTKRELIANCE27-01-2026XX0.00", "instrumentType": "FUTSTK", "instrument": "Stock Futures", "expiryDate": "27-Jan-2026", "optionType": "-", "strikePrice": 0, "lastPrice": 1571.3, "pChange": -0.7265605256507455, "openPrice": 1585, "highPrice": 1585.2, "lowPrice": 1566.1, "numberOfContractsTraded": 39586, "totalTurnover": 311585.3646, "premiumTurnover": 31158536460, "openInterest": 103271, "underlyingValue": 1560.6 },
            // { "underlying": "BAJFINANCE", "identifier": "FUTSTKBAJFINANCE30-12-2025XX0.00", "instrumentType": "FUTSTK", "instrument": "Stock Futures", "expiryDate": "30-Dec-2025", "optionType": "-", "strikePrice": 0, "lastPrice": 1005, "pChange": -0.5836383420714215, "openPrice": 1012.5, "highPrice": 1037, "lowPrice": 1004.4, "numberOfContractsTraded": 38677, "totalTurnover": 297306.2313, "premiumTurnover": 29730623130, "openInterest": 51273, "underlyingValue": 1009.4 },
            // { "underlying": "HINDALCO", "identifier": "FUTSTKHINDALCO30-12-2025XX0.00", "instrumentType": "FUTSTK", "instrument": "Stock Futures", "expiryDate": "30-Dec-2025", "optionType": "-", "strikePrice": 0, "lastPrice": 863.3, "pChange": 0.02896703551358554, "openPrice": 865.85, "highPrice": 881.25, "lowPrice": 862.05, "numberOfContractsTraded": 37049, "totalTurnover": 225768.45522, "premiumTurnover": 22576845522, "openInterest": 43469, "underlyingValue": 863.95 },
            // { "underlying": "BAJFINANCE", "identifier": "FUTSTKBAJFINANCE27-01-2026XX0.00", "instrumentType": "FUTSTK", "instrument": "Stock Futures", "expiryDate": "27-Jan-2026", "optionType": "-", "strikePrice": 0, "lastPrice": 1012.6, "pChange": -0.5402219821235635, "openPrice": 1022.9, "highPrice": 1044, "lowPrice": 1012, "numberOfContractsTraded": 33100, "totalTurnover": 256179.105, "premiumTurnover": 25617910500, "openInterest": 66446, "underlyingValue": 1009.4 },
            // { "underlying": "HINDALCO", "identifier": "FUTSTKHINDALCO27-01-2026XX0.00", "instrumentType": "FUTSTK", "instrument": "Stock Futures", "expiryDate": "27-Jan-2026", "optionType": "-", "strikePrice": 0, "lastPrice": 869, "pChange": -0.005753408894770151, "openPrice": 869.5, "highPrice": 887, "lowPrice": 868.7, "numberOfContractsTraded": 32712, "totalTurnover": 200752.56264, "premiumTurnover": 20075256264, "openInterest": 62102, "underlyingValue": 863.95 },
            // { "underlying": "TMPV", "identifier": "FUTSTKTMPV30-12-2025XX0.00", "instrumentType": "FUTSTK", "instrument": "Stock Futures", "expiryDate": "30-Dec-2025", "optionType": "-", "strikePrice": 0, "lastPrice": 359, "pChange": -1.1563876651982379, "openPrice": 363.9, "highPrice": 364.4, "lowPrice": 358.45, "numberOfContractsTraded": 32104, "totalTurnover": 92541.70624, "premiumTurnover": 9254170624, "openInterest": 62625, "underlyingValue": 359.25 },
            // { "underlying": "TMPV", "identifier": "FUTSTKTMPV27-01-2026XX0.00", "instrumentType": "FUTSTK", "instrument": "Stock Futures", "expiryDate": "27-Jan-2026", "optionType": "-", "strikePrice": 0, "lastPrice": 360.95, "pChange": -1.0824883529734173, "openPrice": 366, "highPrice": 366.2, "lowPrice": 360.15, "numberOfContractsTraded": 31908, "totalTurnover": 92369.83104, "premiumTurnover": 9236983104, "openInterest": 62442, "underlyingValue": 359.25 },
            // { "underlying": "ICICIBANK", "identifier": "FUTSTKICICIBANK30-12-2025XX0.00", "instrumentType": "FUTSTK", "instrument": "Stock Futures", "expiryDate": "30-Dec-2025", "optionType": "-", "strikePrice": 0, "lastPrice": 1359.6, "pChange": -0.3298878381350341, "openPrice": 1363.9, "highPrice": 1368, "lowPrice": 1358.7, "numberOfContractsTraded": 28368, "totalTurnover": 270671.00256, "premiumTurnover": 27067100256, "openInterest": 89719, "underlyingValue": 1359 },
            // { "underlying": "TRENT", "identifier": "FUTSTKTRENT30-12-2025XX0.00", "instrumentType": "FUTSTK", "instrument": "Stock Futures", "expiryDate": "30-Dec-2025", "optionType": "-", "strikePrice": 0, "lastPrice": 4277.7, "pChange": 2.1052631578947367, "openPrice": 4171.5, "highPrice": 4310.9, "lowPrice": 4148, "numberOfContractsTraded": 25758, "totalTurnover": 109422.5598, "premiumTurnover": 10942255980, "openInterest": 49357, "underlyingValue": 4284 },
            // { "underlying": "M&M", "identifier": "FUTSTKM&M30-12-2025XX0.00", "instrumentType": "FUTSTK", "instrument": "Stock Futures", "expiryDate": "30-Dec-2025", "optionType": "-", "strikePrice": 0, "lastPrice": 3635.6, "pChange": 0.34777808446039193, "openPrice": 3620.7, "highPrice": 3654.2, "lowPrice": 3611.6, "numberOfContractsTraded": 25387, "totalTurnover": 184693.47144, "premiumTurnover": 18469347144, "openInterest": 41371, "underlyingValue": 3636.1 },
            // { "underlying": "VEDL", "identifier": "FUTSTKVEDL30-12-2025XX0.00", "instrumentType": "FUTSTK", "instrument": "Stock Futures", "expiryDate": "30-Dec-2025", "optionType": "-", "strikePrice": 0, "lastPrice": 597.8, "pChange": 1.99624637433885, "openPrice": 589, "highPrice": 600.4, "lowPrice": 586.75, "numberOfContractsTraded": 25180, "totalTurnover": 172737.1921, "premiumTurnover": 17273719210, "openInterest": 63438, "underlyingValue": 597.65 },
            // { "underlying": "BHARTIARTL", "identifier": "FUTSTKBHARTIARTL30-12-2025XX0.00", "instrumentType": "FUTSTK", "instrument": "Stock Futures", "expiryDate": "30-Dec-2025", "optionType": "-", "strikePrice": 0, "lastPrice": 2127.3, "pChange": 0.14122299110295156, "openPrice": 2119.3, "highPrice": 2137.7, "lowPrice": 2118.5, "numberOfContractsTraded": 24196, "totalTurnover": 244823.71758, "premiumTurnover": 24482371758, "openInterest": 49743, "underlyingValue": 2123.5 },
            // { "underlying": "ICICIBANK", "identifier": "FUTSTKICICIBANK27-01-2026XX0.00", "instrumentType": "FUTSTK", "instrument": "Stock Futures", "expiryDate": "27-Jan-2026", "optionType": "-", "strikePrice": 0, "lastPrice": 1368.8, "pChange": -0.32767785625864704, "openPrice": 1372.7, "highPrice": 1376.8, "lowPrice": 1367.8, "numberOfContractsTraded": 23965, "totalTurnover": 230188.37835, "premiumTurnover": 23018837835, "openInterest": 81913, "underlyingValue": 1359 },
            // { "underlying": "NIFTY", "identifier": "FUTIDXNIFTY27-01-2026XX0.00", "instrumentType": "FUTIDX", "instrument": "Index Futures", "expiryDate": "27-Jan-2026", "optionType": "-", "strikePrice": 0, "lastPrice": 26345, "pChange": -0.18110999969688704, "openPrice": 26399, "highPrice": 26448, "lowPrice": 26337.5, "numberOfContractsTraded": 22454, "totalTurnover": 385032.01954099996, "premiumTurnover": 38503201954.1, "openInterest": 49626, "underlyingValue": 26142.1 },
            // { "underlying": "BANKNIFTY", "identifier": "FUTIDXBANKNIFTY30-12-2025XX0.00", "instrumentType": "FUTIDX", "instrument": "Index Futures", "expiryDate": "30-Dec-2025", "optionType": "-", "strikePrice": 0, "lastPrice": 59221, "pChange": -0.31410122610575075, "openPrice": 59437, "highPrice": 59590, "lowPrice": 59221, "numberOfContractsTraded": 21034, "totalTurnover": 437261.52288, "premiumTurnover": 43726152288, "openInterest": 39396, "underlyingValue": 59183.6 },
            // { "underlying": "MIDCPNIFTY", "identifier": "FUTIDXMIDCPNIFTY30-12-2025XX0.00", "instrumentType": "FUTIDX", "instrument": "Index Futures", "expiryDate": "30-Dec-2025", "optionType": "-", "strikePrice": 0, "lastPrice": 13811.05, "pChange": -1.0935457882015933, "openPrice": 13969.95, "highPrice": 14013.5, "lowPrice": 13773.3, "numberOfContractsTraded": 13997, "totalTurnover": 272275.018848, "premiumTurnover": 27227501884.8, "openInterest": 13952, "underlyingValue": 13813.1 },
            // { "underlying": "BANKNIFTY", "identifier": "FUTIDXBANKNIFTY27-01-2026XX0.00", "instrumentType": "FUTIDX", "instrument": "Index Futures", "expiryDate": "27-Jan-2026", "optionType": "-", "strikePrice": 0, "lastPrice": 59611, "pChange": -0.3047169243325328, "openPrice": 59777, "highPrice": 59960, "lowPrice": 59605, "numberOfContractsTraded": 5261, "totalTurnover": 94350.221595, "premiumTurnover": 9435022159.5, "openInterest": 12185, "underlyingValue": 59183.6 },
            // { "underlying": "MIDCPNIFTY", "identifier": "FUTIDXMIDCPNIFTY27-01-2026XX0.00", "instrumentType": "FUTIDX", "instrument": "Index Futures", "expiryDate": "27-Jan-2026", "optionType": "-", "strikePrice": 0, "lastPrice": 13902.55, "pChange": -0.9546505373471401, "openPrice": 14018.7, "highPrice": 14079.7, "lowPrice": 13855.05, "numberOfContractsTraded": 3869, "totalTurnover": 64801.881, "premiumTurnover": 6480188100, "openInterest": 2955, "underlyingValue": 13813.1 },
            // { "underlying": "NIFTY", "identifier": "FUTIDXNIFTY24-02-2026XX0.00", "instrumentType": "FUTIDX", "instrument": "Index Futures", "expiryDate": "24-Feb-2026", "optionType": "-", "strikePrice": 0, "lastPrice": 26494.8, "pChange": -0.15638954940967656, "openPrice": 26600, "highPrice": 26600, "lowPrice": 26481.2, "numberOfContractsTraded": 1851, "totalTurnover": 31930.3858185, "premiumTurnover": 3193038581.85, "openInterest": 11029, "underlyingValue": 26142.1 },
            // {
            //     "underlying": "BANKNIFTY", "identifier": "FUTIDXBANKNIFTY24-02-2026XX0.00", "instrumentType": "FUTIDX", "instrument": "Index Futures", "expiryDate": "24-Feb-2026", "optionType": "-", "strikePrice": 0, "lastPrice": 59990, "pChange": -0.25174006591133563, "openPrice": 60160, "highPrice": 60300, "lowPrice": 59990, "numberOfContractsTraded": 465,
            //     "totalTurnover": 8392.142835, "premiumTurnover": 839214283.5, "openInterest": 1723, "underlyingValue": 59183.6
            // },
            // { "underlying": "NIFTYNXT50", "identifier": "FUTIDXNIFTYNXT5030-12-2025XX0.00", "instrumentType": "FUTIDX", "instrument": "Index Futures", "expiryDate": "30-Dec-2025", "optionType": "-", "strikePrice": 0, "lastPrice": 68920, "pChange": -0.2073463146798874, "openPrice": 69063.2, "highPrice": 69260, "lowPrice": 68841.4, "numberOfContractsTraded": 215, "totalTurnover": 3711.812675, "premiumTurnover": 371181267.5, "openInterest": 899, "underlyingValue": 68957.25 },
            // { "underlying": "FINNIFTY", "identifier": "FUTIDXFINNIFTY30-12-2025XX0.00", "instrumentType": "FUTIDX", "instrument": "Index Futures", "expiryDate": "30-Dec-2025", "optionType": "-", "strikePrice": 0, "lastPrice": 27572.3, "pChange": -0.2200259833315842, "openPrice": 27626, "highPrice": 27751, "lowPrice": 27572, "numberOfContractsTraded": 163, "totalTurnover": 2931.598358, "premiumTurnover": 293159835.8, "openInterest": 550, "underlyingValue": 27565.5 },
            // { "underlying": "MIDCPNIFTY", "identifier": "FUTIDXMIDCPNIFTY24-02-2026XX0.00", "instrumentType": "FUTIDX", "instrument": "Index Futures", "expiryDate": "24-Feb-2026", "optionType": "-", "strikePrice": 0, "lastPrice": 13955, "pChange": -1.0806347001052636, "openPrice": 14070.55, "highPrice": 14136.85, "lowPrice": 13933.25, "numberOfContractsTraded": 134, "totalTurnover": 2255.097792, "premiumTurnover": 225509779.2, "openInterest": 188, "underlyingValue": 13813.1 },
            // { "underlying": "NIFTYNXT50", "identifier": "FUTIDXNIFTYNXT5027-01-2026XX0.00", "instrumentType": "FUTIDX", "instrument": "Index Futures", "expiryDate": "27-Jan-2026", "optionType": "-", "strikePrice": 0, "lastPrice": 69384.4, "pChange": -0.1916061544126955, "openPrice": 69670, "highPrice": 69772.4, "lowPrice": 69291, "numberOfContractsTraded": 122, "totalTurnover": 2119.488615, "premiumTurnover": 211948861.5, "openInterest": 180, "underlyingValue": 68957.25 },
            // {
            //     "underlying": "FINNIFTY", "identifier": "FUTIDXFINNIFTY27-01-2026XX0.00", "instrumentType": "FUTIDX", "instrument": "Index Futures", "expiryDate": "27-Jan-2026", "optionType": "-", "strikePrice": 0, "lastPrice": 27750, "pChange": -0.24085990581299205, "openPrice": 27817, "highPrice": 27903.7, "lowPrice": 27615, "numberOfContractsTraded": 48,
            //     "totalTurnover": 801.379584, "premiumTurnover": 80137958.4, "openInterest": 107, "underlyingValue": 27565.5
            // }
        ],
        "timestamp": "24-Dec-2025 15:30:00"
    },
    "OPTSTK": {
        "data": [
            //     { "identifier": "OPTSTKTRENT30-12-2025CE4300.00", "instrumentType": "OPTSTK", "instrument": "Stock Options", "underlying": "TRENT", "expiryDate": "30-Dec-2025", "optionType": "Call", "strikePrice": 4300, "lastPrice": 32.05, "numberOfContractsTraded": 74123, "totalTurnover": 2562.43211, "premiumTurnover": 321291.33211, "openInterest": 5833, "underlyingValue": 4284, "pChange": 96.62576687116564 },
            //     { "identifier": "OPTSTKDIXON30-12-2025CE13500.00", "instrumentType": "OPTSTK", "instrument": "Stock Options", "underlying": "DIXON", "expiryDate": "30-Dec-2025", "optionType": "Call", "strikePrice": 13500, "lastPrice": 28.55, "numberOfContractsTraded": 73523, "totalTurnover": 3480.946435, "premiumTurnover": 499761.196435, "openInterest": 9102, "underlyingValue": 12649, "pChange": -65.97139451728248 },
            //     { "identifier": "OPTSTKTRENT30-12-2025CE4400.00", "instrumentType": "OPTSTK", "instrument": "Stock Options", "underlying": "TRENT", "expiryDate": "30-Dec-2025", "optionType": "Call", "strikePrice": 4400, "lastPrice": 11.4, "numberOfContractsTraded": 62368, "totalTurnover": 908.70176, "premiumTurnover": 275327.90176, "openInterest": 7606, "underlyingValue": 4284, "pChange": 62.857142857142854 },
            //     { "identifier": "OPTSTKBDL30-12-2025CE1500.00", "instrumentType": "OPTSTK", "instrument": "Stock Options", "underlying": "BDL", "expiryDate": "30-Dec-2025", "optionType": "Call", "strikePrice": 1500, "lastPrice": 12, "numberOfContractsTraded": 52470, "totalTurnover": 2621.007675, "premiumTurnover": 258412.257675, "openInterest": 2040, "underlyingValue": 1478.7, "pChange": 158.06451612903226 },
            //     { "identifier": "OPTSTKDIXON30-12-2025CE13250.00", "instrumentType": "OPTSTK", "instrument": "Stock Options", "underlying": "DIXON", "expiryDate": "30-Dec-2025", "optionType": "Call", "strikePrice": 13250, "lastPrice": 50.35, "numberOfContractsTraded": 51564, "totalTurnover": 4242.4281, "premiumTurnover": 345853.9281, "openInterest": 4164, "underlyingValue": 12649, "pChange": -64.55473424850405 },
            //     { "identifier": "OPTSTKDIXON30-12-2025CE14000.00", "instrumentType": "OPTSTK", "instrument": "Stock Options", "underlying": "DIXON", "expiryDate": "30-Dec-2025", "optionType": "Call", "strikePrice": 14000, "lastPrice": 10.5, "numberOfContractsTraded": 43187, "totalTurnover": 632.68955, "premiumTurnover": 302941.68955, "openInterest": 9683, "underlyingValue": 12649, "pChange": -66.4 },
            //     { "identifier": "OPTSTKHINDZINC30-12-2025CE630.00", "instrumentType": "OPTSTK", "instrument": "Stock Options", "underlying": "HINDZINC", "expiryDate": "30-Dec-2025", "optionType": "Call", "strikePrice": 630, "lastPrice": 6.7, "numberOfContractsTraded": 42188, "totalTurnover": 4118.91991, "premiumTurnover": 329704.80991, "openInterest": 5015, "underlyingValue": 625.45, "pChange": 123.33333333333333 },
            //     { "identifier": "OPTSTKDIXON30-12-2025CE13000.00", "instrumentType": "OPTSTK", "instrument": "Stock Options", "underlying": "DIXON", "expiryDate": "30-Dec-2025", "optionType": "Call", "strikePrice": 13000, "lastPrice": 95, "numberOfContractsTraded": 41807, "totalTurnover": 5099.408825, "premiumTurnover": 276844.908825, "openInterest": 6791, "underlyingValue": 12649, "pChange": -61.35855196257881 },
            //     { "identifier": "OPTSTKSHRIRAMFIN30-12-2025CE980.00", "instrumentType": "OPTSTK", "instrument": "Stock Options", "underlying": "SHRIRAMFIN", "expiryDate": "30-Dec-2025", "optionType": "Call", "strikePrice": 980, "lastPrice": 8.5, "numberOfContractsTraded": 38843, "totalTurnover": 3153.27474, "premiumTurnover": 317198.92974, "openInterest": 2298, "underlyingValue": 974, "pChange": 70 },
            //     { "identifier": "OPTSTKVEDL30-12-2025CE600.00", "instrumentType": "OPTSTK", "instrument": "Stock Options", "underlying": "VEDL", "expiryDate": "30-Dec-2025", "optionType": "Call", "strikePrice": 600, "lastPrice": 5.05, "numberOfContractsTraded": 36433, "totalTurnover": 2178.6934, "premiumTurnover": 253566.3934, "openInterest": 4433, "underlyingValue": 597.65, "pChange": 119.56521739130434 },
            //     { "identifier": "OPTSTKTRENT30-12-2025CE4500.00", "instrumentType": "OPTSTK", "instrument": "Stock Options", "underlying": "TRENT", "expiryDate": "30-Dec-2025", "optionType": "Call", "strikePrice": 4500, "lastPrice": 5.65, "numberOfContractsTraded": 33780, "totalTurnover": 248.6208, "premiumTurnover": 152258.6208, "openInterest": 5694, "underlyingValue": 4284, "pChange": 31.3953488372093 },
            //     { "identifier": "OPTSTKCOALINDIA30-12-2025CE410.00", "instrumentType": "OPTSTK", "instrument": "Stock Options", "underlying": "COALINDIA", "expiryDate": "30-Dec-2025", "optionType": "Call", "strikePrice": 410, "lastPrice": 2, "numberOfContractsTraded": 33116, "totalTurnover": 1810.6173, "premiumTurnover": 185107.6773, "openInterest": 3055, "underlyingValue": 402.4, "pChange": 29.032258064516128 },
            //     { "identifier": "OPTSTKINFY30-12-2025CE1680.00", "instrumentType": "OPTSTK", "instrument": "Stock Options", "underlying": "INFY", "expiryDate": "30-Dec-2025", "optionType": "Call", "strikePrice": 1680, "lastPrice": 4.4, "numberOfContractsTraded": 31231, "totalTurnover": 477.20968, "premiumTurnover": 210349.52968, "openInterest": 9203, "underlyingValue": 1667, "pChange": -33.333333333333336 },
            //     { "identifier": "OPTSTKDIXON30-12-2025CE13750.00", "instrumentType": "OPTSTK", "instrument": "Stock Options", "underlying": "DIXON", "expiryDate": "30-Dec-2025", "optionType": "Call", "strikePrice": 13750, "lastPrice": 17.15, "numberOfContractsTraded": 30548, "totalTurnover": 775.61372, "premiumTurnover": 210793.11372, "openInterest": 4651, "underlyingValue": 12649, "pChange": -65.90457256461232 },
            //     { "identifier": "OPTSTKSHRIRAMFIN30-12-2025CE1000.00", "instrumentType": "OPTSTK", "instrument": "Stock Options", "underlying": "SHRIRAMFIN", "expiryDate": "30-Dec-2025", "optionType": "Call", "strikePrice": 1000, "lastPrice": 3.45, "numberOfContractsTraded": 30241, "totalTurnover": 1122.697125, "premiumTurnover": 250610.947125, "openInterest": 3714, "underlyingValue": 974, "pChange": 35.294117647058826 },
            //     { "identifier": "OPTSTKBAJFINANCE30-12-2025CE1040.00", "instrumentType": "OPTSTK", "instrument": "Stock Options", "underlying": "BAJFINANCE", "expiryDate": "30-Dec-2025", "optionType": "Call", "strikePrice": 1040, "lastPrice": 1.55, "numberOfContractsTraded": 29729, "totalTurnover": 1324.42695, "premiumTurnover": 233210.62695, "openInterest": 3287, "underlyingValue": 1009.4, "pChange": -29.545454545454547 },
            //     { "identifier": "OPTSTKTMPV30-12-2025CE370.00", "instrumentType": "OPTSTK", "instrument": "Stock Options", "underlying": "TMPV", "expiryDate": "30-Dec-2025", "optionType": "Call", "strikePrice": 370, "lastPrice": 0.75, "numberOfContractsTraded": 29607, "totalTurnover": 229.75032, "premiumTurnover": 87866.47032, "openInterest": 12609, "underlyingValue": 359.25, "pChange": -54.54545454545455 },
            //     { "identifier": "OPTSTKTRENT30-12-2025CE4200.00", "instrumentType": "OPTSTK", "instrument": "Stock Options", "underlying": "TRENT", "expiryDate": "30-Dec-2025", "optionType": "Call", "strikePrice": 4200, "lastPrice": 92.35, "numberOfContractsTraded": 28521, "totalTurnover": 2046.09654, "premiumTurnover": 121834.29654, "openInterest": 1443, "underlyingValue": 4284, "pChange": 114.51800232288038 },
            //     { "identifier": "OPTSTKRELIANCE30-12-2025CE1570.00", "instrumentType": "OPTSTK", "instrument": "Stock Options", "underlying": "RELIANCE", "expiryDate": "30-Dec-2025", "optionType": "Call", "strikePrice": 1570, "lastPrice": 3.45, "numberOfContractsTraded": 28183, "totalTurnover": 731.34885, "premiumTurnover": 221967.89885, "openInterest": 6467, "underlyingValue": 1560.6, "pChange": -64.24870466321244 },
            //     { "identifier": "OPTSTKMUTHOOTFIN30-12-2025CE3900.00", "instrumentType": "OPTSTK", "instrument": "Stock Options", "underlying": "MUTHOOTFIN", "expiryDate": "30-Dec-2025", "optionType": "Call", "strikePrice": 3900, "lastPrice": 12.35, "numberOfContractsTraded": 26933, "totalTurnover": 2035.32681, "premiumTurnover": 290891.75181, "openInterest": 2254, "underlyingValue": 3796.7, "pChange": -0.8032128514056225 }
        ],
        "timestamp": "24-Dec-2025 15:30:00"
    },
    "OPTSTK_PUTS": {
        "data": [
            // { "identifier": "OPTSTKDIXON30-12-2025PE12500.00", "instrumentType": "OPTSTK", "instrument": "Stock Options", "underlying": "DIXON", "expiryDate": "30-Dec-2025", "optionType": "Put", "strikePrice": 12500, "lastPrice": 167.05, "numberOfContractsTraded": 72776, "totalTurnover": 4195.90028, "premiumTurnover": 459045.90028, "openInterest": 8170, "underlyingValue": 12649, "pChange": -29.6335299073294 },
            // { "identifier": "OPTSTKDIXON30-12-2025PE12000.00", "instrumentType": "OPTSTK", "instrument": "Stock Options", "underlying": "DIXON", "expiryDate": "30-Dec-2025", "optionType": "Put", "strikePrice": 12000, "lastPrice": 57.1, "numberOfContractsTraded": 59889, "totalTurnover": 1448.71491, "premiumTurnover": 360782.71491, "openInterest": 7779, "underlyingValue": 12649, "pChange": -56.31216526396327 },
            // { "identifier": "OPTSTKDIXON30-12-2025PE13000.00", "instrumentType": "OPTSTK", "instrument": "Stock Options", "underlying": "DIXON", "expiryDate": "30-Dec-2025", "optionType": "Put", "strikePrice": 13000, "lastPrice": 437.2, "numberOfContractsTraded": 38942, "totalTurnover": 4960.04254, "premiumTurnover": 258083.04254, "openInterest": 7434, "underlyingValue": 12649, "pChange": 3.5160411980584825 },
            // { "identifier": "OPTSTKDIXON30-12-2025PE12750.00", "instrumentType": "OPTSTK", "instrument": "Stock Options", "underlying": "DIXON", "expiryDate": "30-Dec-2025", "optionType": "Put", "strikePrice": 12750, "lastPrice": 276.1, "numberOfContractsTraded": 31204, "totalTurnover": 2621.76008, "premiumTurnover": 201547.26008, "openInterest": 2245, "underlyingValue": 12649, "pChange": -12.098057943330149 },
            // { "identifier": "OPTSTKTRENT30-12-2025PE4200.00", "instrumentType": "OPTSTK", "instrument": "Stock Options", "underlying": "TRENT", "expiryDate": "30-Dec-2025", "optionType": "Put", "strikePrice": 4200, "lastPrice": 14.2, "numberOfContractsTraded": 28388, "totalTurnover": 605.79992, "premiumTurnover": 119835.39992, "openInterest": 3112, "underlyingValue": 4284, "pChange": -73.70370370370371 },
            // { "identifier": "OPTSTKDIXON30-12-2025PE12250.00", "instrumentType": "OPTSTK", "instrument": "Stock Options", "underlying": "DIXON", "expiryDate": "30-Dec-2025", "optionType": "Put", "strikePrice": 12250, "lastPrice": 94.3, "numberOfContractsTraded": 26789, "totalTurnover": 974.31593, "premiumTurnover": 165056.94093, "openInterest": 2656, "underlyingValue": 12649, "pChange": -45.61707035755479 },
            // { "identifier": "OPTSTKDIXON30-12-2025PE11500.00", "instrumentType": "OPTSTK", "instrument": "Stock Options", "underlying": "DIXON", "expiryDate": "30-Dec-2025", "optionType": "Put", "strikePrice": 11500, "lastPrice": 22.35, "numberOfContractsTraded": 21878, "totalTurnover": 253.34724, "premiumTurnover": 126051.84724, "openInterest": 3578, "underlyingValue": 12649, "pChange": -66.13636363636364 },
            // {
            //     "identifier": "OPTSTKINDIGO30-12-2025PE5100.00", "instrumentType": "OPTSTK", "instrument": "Stock Options", "underlying": "INDIGO", "expiryDate": "30-Dec-2025", "optionType": "Put", "strikePrice": 5100, "lastPrice": 38.35,
            //     "numberOfContractsTraded": 20711, "totalTurnover": 1141.693875, "premiumTurnover": 159580.843875, "openInterest": 2861, "underlyingValue": 5077, "pChange": 39.45454545454545
            // },
            // { "identifier": "OPTSTKINFY30-12-2025PE1640.00", "instrumentType": "OPTSTK", "instrument": "Stock Options", "underlying": "INFY", "expiryDate": "30-Dec-2025", "optionType": "Put", "strikePrice": 1640, "lastPrice": 3, "numberOfContractsTraded": 20117, "totalTurnover": 388.66044, "premiumTurnover": 132356.18044, "openInterest": 5574, "underlyingValue": 1667, "pChange": -37.5 },
            // { "identifier": "OPTSTKINDIGO30-12-2025PE5000.00", "instrumentType": "OPTSTK", "instrument": "Stock Options", "underlying": "INDIGO", "expiryDate": "30-Dec-2025", "optionType": "Put", "strikePrice": 5000, "lastPrice": 8.75, "numberOfContractsTraded": 17714, "totalTurnover": 264.38145, "premiumTurnover": 133119.38145, "openInterest": 5337, "underlyingValue": 5077, "pChange": 4.166666666666667 },
            // { "identifier": "OPTSTKRELIANCE30-12-2025PE1560.00", "instrumentType": "OPTSTK", "instrument": "Stock Options", "underlying": "RELIANCE", "expiryDate": "30-Dec-2025", "optionType": "Put", "strikePrice": 1560, "lastPrice": 7, "numberOfContractsTraded": 17504, "totalTurnover": 555.752, "premiumTurnover": 137086.952, "openInterest": 2589, "underlyingValue": 1560.6, "pChange": 48.93617021276596 },
            // { "identifier": "OPTSTKTRENT30-12-2025PE4100.00", "instrumentType": "OPTSTK", "instrument": "Stock Options", "underlying": "TRENT", "expiryDate": "30-Dec-2025", "optionType": "Put", "strikePrice": 4100, "lastPrice": 4.25, "numberOfContractsTraded": 17383, "totalTurnover": 126.02675, "premiumTurnover": 71396.32675, "openInterest": 2642, "underlyingValue": 4284, "pChange": -76.19047619047619 },
            // { "identifier": "OPTSTKRELIANCE30-12-2025PE1550.00", "instrumentType": "OPTSTK", "instrument": "Stock Options", "underlying": "RELIANCE", "expiryDate": "30-Dec-2025", "optionType": "Put", "strikePrice": 1550, "lastPrice": 3.45, "numberOfContractsTraded": 17095, "totalTurnover": 282.92225, "premiumTurnover": 132769.17225, "openInterest": 3441, "underlyingValue": 1560.6, "pChange": 25.454545454545453 },
            // { "identifier": "OPTSTKTMPV30-12-2025PE350.00", "instrumentType": "OPTSTK", "instrument": "Stock Options", "underlying": "TMPV", "expiryDate": "30-Dec-2025", "optionType": "Put", "strikePrice": 350, "lastPrice": 0.45, "numberOfContractsTraded": 16771, "totalTurnover": 73.7924, "premiumTurnover": 47032.5924, "openInterest": 6985, "underlyingValue": 359.25, "pChange": -35.714285714285715 },
            // { "identifier": "OPTSTKINDIGO30-12-2025PE5050.00", "instrumentType": "OPTSTK", "instrument": "Stock Options", "underlying": "INDIGO", "expiryDate": "30-Dec-2025", "optionType": "Put", "strikePrice": 5050, "lastPrice": 18, "numberOfContractsTraded": 15715, "totalTurnover": 519.302175, "premiumTurnover": 119560.427175, "openInterest": 1611, "underlyingValue": 5077, "pChange": 20.401337792642142 },
            // { "identifier": "OPTSTKDIXON30-12-2025PE11750.00", "instrumentType": "OPTSTK", "instrument": "Stock Options", "underlying": "DIXON", "expiryDate": "30-Dec-2025", "optionType": "Put", "strikePrice": 11750, "lastPrice": 34.2, "numberOfContractsTraded": 15253, "totalTurnover": 242.82776, "premiumTurnover": 89854.20276, "openInterest": 1160, "underlyingValue": 12649, "pChange": -63.46153846153846 },
            // {
            //     "identifier": "OPTSTKTCS30-12-2025PE3300.00", "instrumentType": "OPTSTK", "instrument": "Stock Options", "underlying": "TCS", "expiryDate": "30-Dec-2025", "optionType": "Put", "strikePrice": 3300, "lastPrice": 9.55, "numberOfContractsTraded": 15065, "totalTurnover": 385.7016625, "premiumTurnover": 87386.0766625,
            //     "openInterest": 3985, "underlyingValue": 3313.1, "pChange": -45.11494252873563
            // },
            // { "identifier": "OPTSTKSHRIRAMFIN30-12-2025PE970.00", "instrumentType": "OPTSTK", "instrument": "Stock Options", "underlying": "SHRIRAMFIN", "expiryDate": "30-Dec-2025", "optionType": "Put", "strikePrice": 970, "lastPrice": 9.65, "numberOfContractsTraded": 14646, "totalTurnover": 1268.70975, "premiumTurnover": 118473.32475, "openInterest": 993, "underlyingValue": 974, "pChange": -53.60576923076923 },
            // { "identifier": "OPTSTKDIXON30-12-2025PE11000.00", "instrumentType": "OPTSTK", "instrument": "Stock Options", "underlying": "DIXON", "expiryDate": "30-Dec-2025", "optionType": "Put", "strikePrice": 11000, "lastPrice": 9.55, "numberOfContractsTraded": 14205, "totalTurnover": 81.039525, "premiumTurnover": 78208.539525, "openInterest": 3180, "underlyingValue": 12649, "pChange": -71.53502235469449 },
            // { "identifier": "OPTSTKRELIANCE30-12-2025PE1540.00", "instrumentType": "OPTSTK", "instrument": "Stock Options", "underlying": "RELIANCE", "expiryDate": "30-Dec-2025", "optionType": "Put", "strikePrice": 1540, "lastPrice": 1.75, "numberOfContractsTraded": 13955, "totalTurnover": 125.595, "premiumTurnover": 107579.095, "openInterest": 2687, "underlyingValue": 1560.6, "pChange": 0 }
        ],
        "timestamp": "24-Dec-2025 15:30:00"
    },
    "OPTIDX": {
        "data": [
            // { "identifier": "OPTIDXNIFTY30-12-2025CE26200.00", "instrumentType": "OPTIDX", "instrument": "Index Options", "underlying": "NIFTY", "expiryDate": "30-Dec-2025", "optionType": "Call", "strikePrice": 26200, "lastPrice": 68.1, "numberOfContractsTraded": 3417097, "totalTurnover": 260895.35595, "premiumTurnover": 67406851.40595, "openInterest": 184108, "underlyingValue": 26142.1, "pChange": -40.18445322793149 },
            // { "identifier": "OPTIDXNIFTY30-12-2025CE26250.00", "instrumentType": "OPTIDX", "instrument": "Index Options", "underlying": "NIFTY", "expiryDate": "30-Dec-2025", "optionType": "Call", "strikePrice": 26250, "lastPrice": 48.2, "numberOfContractsTraded": 1828127, "totalTurnover": 108385.0795125, "premiumTurnover": 36099635.3920125, "openInterest": 86139, "underlyingValue": 26142.1, "pChange": -45.50593555681176 },
            // { "identifier": "OPTIDXNIFTY30-12-2025CE26300.00", "instrumentType": "OPTIDX", "instrument": "Index Options", "underlying": "NIFTY", "expiryDate": "30-Dec-2025", "optionType": "Call", "strikePrice": 26300, "lastPrice": 32.3, "numberOfContractsTraded": 1744351, "totalTurnover": 73315.07253, "premiumTurnover": 34480638.54753, "openInterest": 139696, "underlyingValue": 26142.1, "pChange": -51.89873417721519 },
            // { "identifier": "OPTIDXNIFTY30-12-2025CE26150.00", "instrumentType": "OPTIDX", "instrument": "Index Options", "underlying": "NIFTY", "expiryDate": "30-Dec-2025", "optionType": "Call", "strikePrice": 26150, "lastPrice": 93.45, "numberOfContractsTraded": 1377671, "totalTurnover": 129838.603395, "premiumTurnover": 27149411.090895, "openInterest": 59119, "underlyingValue": 26142.1, "pChange": -34.444054717642935 },
            // { "identifier": "OPTIDXNIFTY30-12-2025CE26400.00", "instrumentType": "OPTIDX", "instrument": "Index Options", "underlying": "NIFTY", "expiryDate": "30-Dec-2025", "optionType": "Call", "strikePrice": 26400, "lastPrice": 13.1, "numberOfContractsTraded": 1198609, "totalTurnover": 23058.2406375, "premiumTurnover": 23755516.4406375, "openInterest": 139586, "underlyingValue": 26142.1, "pChange": -63.812154696132595 },
            // { "identifier": "OPTIDXNIFTY30-12-2025CE26500.00", "instrumentType": "OPTIDX", "instrument": "Index Options", "underlying": "NIFTY", "expiryDate": "30-Dec-2025", "optionType": "Call", "strikePrice": 26500, "lastPrice": 5.8, "numberOfContractsTraded": 1018226, "totalTurnover": 9301.49451, "premiumTurnover": 20246543.24451, "openInterest": 149492, "underlyingValue": 26142.1, "pChange": -68.81720430107526 },
            // { "identifier": "OPTIDXNIFTY30-12-2025CE26350.00", "instrumentType": "OPTIDX", "instrument": "Index Options", "underlying": "NIFTY", "expiryDate": "30-Dec-2025", "optionType": "Call", "strikePrice": 26350, "lastPrice": 20.9, "numberOfContractsTraded": 958639, "totalTurnover": 27587.2338225, "premiumTurnover": 18972690.4713225, "openInterest": 62347, "underlyingValue": 26142.1, "pChange": -58.28343313373254 },
            // { "identifier": "OPTIDXNIFTY30-12-2025CE26100.00", "instrumentType": "OPTIDX", "instrument": "Index Options", "underlying": "NIFTY", "expiryDate": "30-Dec-2025", "optionType": "Call", "strikePrice": 26100, "lastPrice": 123.05, "numberOfContractsTraded": 946352, "totalTurnover": 114094.563, "premiumTurnover": 18638934.963, "openInterest": 60630, "underlyingValue": 26142.1, "pChange": -29.665618748213774 },
            // { "identifier": "OPTIDXNIFTY30-12-2025CE26450.00", "instrumentType": "OPTIDX", "instrument": "Index Options", "underlying": "NIFTY", "expiryDate": "30-Dec-2025", "optionType": "Call", "strikePrice": 26450, "lastPrice": 8.6, "numberOfContractsTraded": 750101, "totalTurnover": 10019.4741075, "premiumTurnover": 14890148.0616075, "openInterest": 59037, "underlyingValue": 26142.1, "pChange": -67.11281070745697 },
            // { "identifier": "OPTIDXNIFTY30-12-2025CE26600.00", "instrumentType": "OPTIDX", "instrument": "Index Options", "underlying": "NIFTY", "expiryDate": "30-Dec-2025", "optionType": "Call", "strikePrice": 26600, "lastPrice": 3.5, "numberOfContractsTraded": 713591, "totalTurnover": 3344.9578125, "premiumTurnover": 14239485.4078125, "openInterest": 107983, "underlyingValue": 26142.1, "pChange": -61.95652173913044 },
            // { "identifier": "OPTIDXNIFTY30-12-2025CE27000.00", "instrumentType": "OPTIDX", "instrument": "Index Options", "underlying": "NIFTY", "expiryDate": "30-Dec-2025", "optionType": "Call", "strikePrice": 27000, "lastPrice": 1.5, "numberOfContractsTraded": 601208, "totalTurnover": 879.2667, "premiumTurnover": 12175341.2667, "openInterest": 162263.33333333334, "underlyingValue": 26142.1, "pChange": -42.30769230769231 },
            // { "identifier": "OPTIDXNIFTY30-12-2025CE26700.00", "instrumentType": "OPTIDX", "instrument": "Index Options", "underlying": "NIFTY", "expiryDate": "30-Dec-2025", "optionType": "Call", "strikePrice": 26700, "lastPrice": 2.4, "numberOfContractsTraded": 594855, "totalTurnover": 1753.3351125, "premiumTurnover": 11913724.7101125, "openInterest": 94944, "underlyingValue": 26142.1, "pChange": -55.96330275229358 },
            // { "identifier": "OPTIDXNIFTY30-12-2025CE26550.00", "instrumentType": "OPTIDX", "instrument": "Index Options", "underlying": "NIFTY", "expiryDate": "30-Dec-2025", "optionType": "Call", "strikePrice": 26550, "lastPrice": 4.15, "numberOfContractsTraded": 578078, "totalTurnover": 3771.95895, "premiumTurnover": 11514750.13395, "openInterest": 43171, "underlyingValue": 26142.1, "pChange": -68.56060606060606 },
            // { "identifier": "OPTIDXNIFTY30-12-2025CE26800.00", "instrumentType": "OPTIDX", "instrument": "Index Options", "underlying": "NIFTY", "expiryDate": "30-Dec-2025", "optionType": "Call", "strikePrice": 26800, "lastPrice": 1.7, "numberOfContractsTraded": 563468, "totalTurnover": 1157.92674, "premiumTurnover": 11326864.72674, "openInterest": 81937, "underlyingValue": 26142.1, "pChange": -54.666666666666664 },
            // { "identifier": "OPTIDXNIFTY30-12-2025CE26900.00", "instrumentType": "OPTIDX", "instrument": "Index Options", "underlying": "NIFTY", "expiryDate": "30-Dec-2025", "optionType": "Call", "strikePrice": 26900, "lastPrice": 1.55, "numberOfContractsTraded": 410518, "totalTurnover": 714.30132, "premiumTurnover": 8282914.95132, "openInterest": 40443, "underlyingValue": 26142.1, "pChange": -47.45762711864407 },
            // { "identifier": "OPTIDXNIFTY30-12-2025CE26000.00", "instrumentType": "OPTIDX", "instrument": "Index Options", "underlying": "NIFTY", "expiryDate": "30-Dec-2025", "optionType": "Call", "strikePrice": 26000, "lastPrice": 194.5, "numberOfContractsTraded": 383192, "totalTurnover": 67980.17676, "premiumTurnover": 7540224.17676, "openInterest": 94848.66666666667, "underlyingValue": 26142.1, "pChange": -21.714630710404506 },
            // { "identifier": "OPTIDXNIFTY30-12-2025CE26650.00", "instrumentType": "OPTIDX", "instrument": "Index Options", "underlying": "NIFTY", "expiryDate": "30-Dec-2025", "optionType": "Call", "strikePrice": 26650, "lastPrice": 2.8, "numberOfContractsTraded": 354490, "totalTurnover": 1324.02015, "premiumTurnover": 7086692.89515, "openInterest": 36954, "underlyingValue": 26142.1, "pChange": -60 },
            // { "identifier": "OPTIDXBANKNIFTY30-12-2025CE59500.00", "instrumentType": "OPTIDX", "instrument": "Index Options", "underlying": "BANKNIFTY", "expiryDate": "30-Dec-2025", "optionType": "Call", "strikePrice": 59500, "lastPrice": 103, "numberOfContractsTraded": 319457, "totalTurnover": 22065.6936325, "premiumTurnover": 6674757.7186325, "openInterest": 72315, "underlyingValue": 59183.6, "pChange": -56.92179004600585 },
            // { "identifier": "OPTIDXNIFTY30-12-2025CE26750.00", "instrumentType": "OPTIDX", "instrument": "Index Options", "underlying": "NIFTY", "expiryDate": "30-Dec-2025", "optionType": "Call", "strikePrice": 26750, "lastPrice": 1.95, "numberOfContractsTraded": 279906, "totalTurnover": 692.76735, "premiumTurnover": 5616306.89235, "openInterest": 33075, "underlyingValue": 26142.1, "pChange": -54.651162790697676 },
            // { "identifier": "OPTIDXBANKNIFTY30-12-2025CE59400.00", "instrumentType": "OPTIDX", "instrument": "Index Options", "underlying": "BANKNIFTY", "expiryDate": "30-Dec-2025", "optionType": "Call", "strikePrice": 59400, "lastPrice": 136.2, "numberOfContractsTraded": 209673, "totalTurnover": 18515.174265, "premiumTurnover": 4377616.844265, "openInterest": 19585, "underlyingValue": 59183.6, "pChange": -52.83116883116883 }
        ],
        "timestamp": "24-Dec-2025 15:30:00"
    },
    "value": {
        "data": [
            { "underlying": "NIFTY", "lastPrice": 26164.1, "pChange": -0.16, "totalTurnover": 867225.99, "instrument": "Index Futures", "expiryDate": "30-Dec-2025", "openInterest": 167636 },
            { "underlying": "HDFCBANK", "lastPrice": 996.3, "pChange": -0.16, "totalTurnover": 451758.29, "instrument": "Stock Futures", "expiryDate": "30-Dec-2025", "openInterest": 191258 }
            // ... (Included simplified relevant data primarily in Volume key for layout)
        ],
        "timestamp": "24-Dec-2025 15:30:00"
    },
    "heatmap": [
        // {
        //     "index": "NIFTY 50",
        //     "indexLongName": "Nifty 50",
        //     "current": 26142.1,
        //     "open": 26170.65,
        //     "close": 26177.15,
        //     "high": 26236.4,
        //     "low": 26123,
        //     "pChange": -0.13,
        //     "yrHigh": 26325.8,
        //     "yrLow": 21743.65,
        //     "timeStamp": "24-Dec-2025 15:39:59"
        // },
        // {
        //     "index": "NIFTY NEXT 50",
        //     "indexLongName": "Nifty Next 50",
        //     "current": 68957.25,
        //     "open": 69194.1,
        //     "close": 69096.3,
        //     "high": 69314.3,
        //     "low": 68851.6,
        //     "pChange": -0.2,
        //     "yrHigh": 70551.15,
        //     "yrLow": 56192.45,
        //     "timeStamp": "24-Dec-2025 15:40:00"
        // },
        // {
        //     "index": "NIFTY MIDCAP 50",
        //     "indexLongName": "Nifty Midcap 50",
        //     "current": 17248.2,
        //     "open": 17402.6,
        //     "close": 17389.3,
        //     "high": 17436.05,
        //     "low": 17235.6,
        //     "pChange": -0.81,
        //     "yrHigh": 17498.55,
        //     "yrLow": 13269.65,
        //     "timeStamp": "24-Dec-2025 15:40:00"
        // },
        // {
        //     "index": "NIFTY MIDCAP 100",
        //     "indexLongName": "Nifty Midcap 100",
        //     "current": 60451.35,
        //     "open": 60876.3,
        //     "close": 60816.1,
        //     "high": 61029.55,
        //     "low": 60406.65,
        //     "pChange": -0.6,
        //     "yrHigh": 61311.25,
        //     "yrLow": 46865.7,
        //     "timeStamp": "24-Dec-2025 15:40:00"
        // },
        // {
        //     "index": "NIFTY MIDCAP 150",
        //     "indexLongName": "NIFTY Midcap 150",
        //     "current": 22247.35,
        //     "open": 22376.9,
        //     "close": 22353.5,
        //     "high": 22425.85,
        //     "low": 22230.65,
        //     "pChange": -0.47,
        //     "yrHigh": 22495.4,
        //     "yrLow": 17269.5,
        //     "timeStamp": "24-Dec-2025 15:39:59"
        // },
        // {
        //     "index": "NIFTY SMLCAP 50",
        //     "indexLongName": "NIFTY Smallcap 50",
        //     "current": 8633.4,
        //     "open": 8637.7,
        //     "close": 8629,
        //     "high": 8673.9,
        //     "low": 8622.55,
        //     "pChange": 0.05,
        //     "yrHigh": 9282.7,
        //     "yrLow": 6776.05,
        //     "timeStamp": "24-Dec-2025 15:39:59"
        // },
        // {
        //     "index": "NIFTY SMLCAP 100",
        //     "indexLongName": "Nifty Smallcap 100",
        //     "current": 17708.6,
        //     "open": 17679.95,
        //     "close": 17658.8,
        //     "high": 17762.7,
        //     "low": 17647.8,
        //     "pChange": 0.28,
        //     "yrHigh": 19224.95,
        //     "yrLow": 14084.3,
        //     "timeStamp": "24-Dec-2025 15:40:00"
        // },
        // {
        //     "index": "NIFTY SMLCAP 250",
        //     "indexLongName": "NIFTY Smallcap 250",
        //     "current": 16644.75,
        //     "open": 16654.95,
        //     "close": 16635,
        //     "high": 16710.95,
        //     "low": 16628.45,
        //     "pChange": 0.06,
        //     "yrHigh": 18117.4,
        //     "yrLow": 13314.7,
        //     "timeStamp": "24-Dec-2025 15:39:59"
        // },
        // {
        //     "index": "NIFTY MIDSML 400",
        //     "indexLongName": "NIFTY MidSmallcap 400",
        //     "current": 20183.25,
        //     "open": 20264.8,
        //     "close": 20242.6,
        //     "high": 20313,
        //     "low": 20169,
        //     "pChange": -0.29,
        //     "yrHigh": 20668.15,
        //     "yrLow": 15832.85,
        //     "timeStamp": "24-Dec-2025 15:39:59"
        // },
        // {
        //     "index": "NIFTY 100",
        //     "indexLongName": "Nifty 100",
        //     "current": 26674.5,
        //     "open": 26713.75,
        //     "close": 26713.15,
        //     "high": 26773.25,
        //     "low": 26653.05,
        //     "pChange": -0.14,
        //     "yrHigh": 26859.5,
        //     "yrLow": 22177.35,
        //     "timeStamp": "24-Dec-2025 15:40:00"
        // },
        // {
        //     "index": "NIFTY 200",
        //     "indexLongName": "Nifty 200",
        //     "current": 14525.4,
        //     "open": 14561.4,
        //     "close": 14558.5,
        //     "high": 14594.45,
        //     "low": 14515.75,
        //     "pChange": -0.23,
        //     "yrHigh": 14642.65,
        //     "yrLow": 11941.45,
        //     "timeStamp": "24-Dec-2025 15:40:00"
        // },
        // {
        //     "index": "NIFTY500 MULTICAP",
        //     "indexLongName": "Nifty500 Multicap 50:25:25",
        //     "current": 16464.9,
        //     "open": 16503.95,
        //     "close": 16494.7,
        //     "high": 16541.7,
        //     "low": 16455.25,
        //     "pChange": -0.18,
        //     "yrHigh": 17112.15,
        //     "yrLow": 5531.55,
        //     "timeStamp": "24-Dec-2025 15:40:00"
        // },
        // {
        //     "index": "NIFTY LARGEMID250",
        //     "indexLongName": "NIFTY LargeMidcap 250",
        //     "current": 16839.05,
        //     "open": 16900.55,
        //     "close": 16891.5,
        //     "high": 16937.75,
        //     "low": 16828.95,
        //     "pChange": -0.31,
        //     "yrHigh": 17095.2,
        //     "yrLow": 5635.2,
        //     "timeStamp": "24-Dec-2025 15:40:00"
        // },
        // {
        //     "index": "NIFTY MID SELECT",
        //     "indexLongName": "Nifty Midcap Select",
        //     "current": 13813.1,
        //     "open": 13946.7,
        //     "close": 13946.35,
        //     "high": 13993.2,
        //     "low": 13797.55,
        //     "pChange": -0.96,
        //     "yrHigh": 14118.4,
        //     "yrLow": 5520.25,
        //     "timeStamp": "24-Dec-2025 15:39:59"
        // },
        // {
        //     "index": "NIFTY TOTAL MKT",
        //     "indexLongName": "Nifty Total Market",
        //     "current": 13382.15,
        //     "open": 13413.95,
        //     "close": 13409.05,
        //     "high": 13443.05,
        //     "low": 13374.6,
        //     "pChange": -0.2,
        //     "yrHigh": 13842.6,
        //     "yrLow": 6252.1,
        //     "timeStamp": "24-Dec-2025 15:39:59"
        // },
        // {
        //     "index": "NIFTY MICROCAP250",
        //     "indexLongName": "Nifty Microcap 250",
        //     "current": 22537.9,
        //     "open": 22688.65,
        //     "close": 22660.75,
        //     "high": 22785.7,
        //     "low": 22508.05,
        //     "pChange": -0.54,
        //     "yrHigh": 26476.9,
        //     "yrLow": 5802.95,
        //     "timeStamp": "24-Dec-2025 15:39:59"
        // },
        // {
        //     "index": "NIFTY 500",
        //     "indexLongName": "Nifty 500",
        //     "current": 23850.25,
        //     "open": 23903.1,
        //     "close": 23895.15,
        //     "high": 23956.8,
        //     "low": 23836.55,
        //     "pChange": -0.19,
        //     "yrHigh": 24035,
        //     "yrLow": 19519.85,
        //     "timeStamp": "24-Dec-2025 15:40:00"
        // },
        // {
        //     "index": "NIFTY FPI 150",
        //     "indexLongName": "Nifty India FPI 150",
        //     "current": 1619.8,
        //     "open": 1624.25,
        //     "close": 1623.9,
        //     "high": 1627.8,
        //     "low": 1618.6,
        //     "pChange": -0.25,
        //     "yrHigh": 1627.85,
        //     "yrLow": 1346.5,
        //     "timeStamp": "24-Dec-2025 15:39:59"
        // },
        // {
        //     "index": "NIFTY500 LMS EQL",
        //     "indexLongName": "Nifty500 Largemidsmall Equal-Cap Weighted",
        //     "current": 18060.95,
        //     "open": 18109.35,
        //     "close": 18095.85,
        //     "high": 18151.4,
        //     "low": 18049.85,
        //     "pChange": -0.19,
        //     "yrHigh": 18838.1,
        //     "yrLow": 14014.4,
        //     "timeStamp": "24-Dec-2025 15:39:59"
        // }
    ],
    "oiGainersUp": [],
    "oiGainersDown": []
};

// Merging duplicates from user input into a clean dataset for "value" logic if different, 
// but for the visualizer, `volume.data` is the most complete list provided in the prompt.
// We will use `volume` data as the primary source for this demo.

const STATE = {
    currentMode: 'volume', // 'volume' or 'value'
    data: RAW_DATA.volume.data
};

// Elements
const els = {
    btnVolume: document.getElementById('btn-volume'),
    btnValue: document.getElementById('btn-value'),
    timestamp: document.getElementById('timestamp-display'),
    topGainer: document.getElementById('metric-top-gainer'),
    topGainerVal: document.getElementById('metric-top-gainer-val'),
    topLoser: document.getElementById('metric-top-loser'),
    topLoserVal: document.getElementById('metric-top-loser-val'),
    highTurnover: document.getElementById('metric-high-turnover'),
    highTurnoverName: document.getElementById('metric-high-turnover-name'),
    contractCount: document.getElementById('metric-contracts'),
    tableBody: document.querySelector('#data-table tbody'),
    indexOptionsTableBody: document.querySelector('#index-options-table tbody'),
    indexPutsTableBody: document.querySelector('#index-puts-table tbody'),
    optionsTableBody: document.querySelector('#options-table tbody'),
    putsTableBody: document.querySelector('#puts-table tbody'),
    searchInput: document.getElementById('search-input'),
    heatmapContainer: document.getElementById('heatmap-section'),
    fiidiiContainer: document.getElementById('fiidii-section'),
    fiidiiNseContainer: document.getElementById('fiidii-nse-section'),
    niftyHeatmapContainer: document.getElementById('nifty-heatmap-section'),
    niftyBankHeatmapContainer: document.getElementById('nifty-bank-heatmap-section'),
    oiGainersUpHeatmapContainer: document.getElementById('oi-gainers-up-heatmap-section'),
    oiGainersDownHeatmapContainer: document.getElementById('oi-gainers-down-heatmap-section')
};

function init() {
    setupEventListeners();
    renderDashboard();
    fetchAllData(); // Fetch all live data
    // Initial render with static data (if any)
    renderIndexOptionsTable();
    renderIndexPutsTable();
    renderOptionsTable();
    renderPutsTable();
}

function setupEventListeners() {
    els.btnVolume.addEventListener('click', () => switchMode('volume'));
    els.btnValue.addEventListener('click', () => switchMode('value'));
    els.searchInput.addEventListener('input', (e) => renderTable(e.target.value));
}

function switchMode(mode) {
    STATE.currentMode = mode;
    // In this specific mock data, volume has the full list. Value has a subset in the user prompt. 
    // We will just simulate the switch by re-rendering, potentially filtering or changing metric focus.
    // For now, we use the same dataset as it's the most reliable one provided.

    // UI Update
    if (mode === 'volume') {
        els.btnVolume.classList.add('active');
        els.btnValue.classList.remove('active');
        STATE.data = RAW_DATA.volume.data;
    } else {
        els.btnValue.classList.add('active');
        els.btnVolume.classList.remove('active');
        // If we had different data for value, we'd assign it here. 
        // using volume data as fallback if value data is sparse in the prompt
        STATE.data = RAW_DATA.volume.data;
    }

    renderDashboard();
}

function renderDashboard() {
    // Filter for large price moves only
    const data = STATE.data.filter(d => d.pChange > 1 || d.pChange < -1);
    STATE.displayData = data; // Store for table search usage

    els.timestamp.innerText = `As on ${RAW_DATA.volume.timestamp}`;

    // Calculate Metrics
    if (!data || data.length === 0) {
        // Clear or show empty state
        els.contractCount.innerText = "0";
        return;
    }

    // Sort for metrics
    const sortedByChange = [...data].sort((a, b) => b.pChange - a.pChange);
    const sortedByTurnover = [...data].sort((a, b) => b.totalTurnover - a.totalTurnover);

    const topGainer = sortedByChange[0];
    const topLoser = sortedByChange[sortedByChange.length - 1];
    const highestTurnover = sortedByTurnover[0];

    // Render Metrics cards
    const getName = (d) => d.underlying || d.symbol || d.identifier || 'N/A';

    if (topGainer) {
        els.topGainer.innerText = getName(topGainer);
        els.topGainerVal.innerText = `+${(topGainer.pChange || 0).toFixed(2)}%`;
    }

    if (topLoser) {
        els.topLoser.innerText = getName(topLoser);
        els.topLoserVal.innerText = `${(topLoser.pChange || 0).toFixed(2)}%`;
    }

    if (highestTurnover) {
        els.highTurnover.innerText = formatCurrency(highestTurnover.totalTurnover || 0);
        els.highTurnoverName.innerText = getName(highestTurnover);
    }

    els.contractCount.innerText = data.length;

    // Render Table
    renderTable();
}


function renderTable(filter = '') {
    const tbody = els.tableBody;
    tbody.innerHTML = '';

    // Use the filtered displayData
    const sourceData = STATE.displayData || STATE.data;

    const filtered = sourceData.filter(d => {
        const searchStr = filter.toLowerCase();
        const name = (d.underlying || d.symbol || d.identifier || '').toLowerCase();
        const instrument = (d.instrument || d.instrumentType || '').toLowerCase();
        return name.includes(searchStr) || instrument.includes(searchStr);
    });



    // Grouping Logic: Positives Descending, then Negatives Ascending (by magnitude)
    const positives = filtered.filter(d => d.pChange >= 0).sort((a, b) => b.pChange - a.pChange);
    const negatives = filtered.filter(d => d.pChange < 0).sort((a, b) => a.pChange - b.pChange); // -20% comes before -5%

    const sortedData = [...positives, ...negatives];

    sortedData.forEach(d => {
        const tr = document.createElement('tr');
        const trendClass = d.pChange >= 0 ? 'trend-up' : 'trend-down';
        const trendIcon = d.pChange >= 0 ? '▲' : '▼';

        const name = d.underlying || d.symbol || d.identifier || 'N/A';
        tr.innerHTML = `
            <td>
                <div style="font-weight: 600;">${name}</div>
                <div style="font-size: 0.8rem; color: #94a3b8;">${d.instrument || d.instrumentType || ''}</div>
            </td>
            <td>${d.expiryDate}</td>
            <td class="text-right">₹${d.lastPrice.toLocaleString()}</td>
            <td class="text-right">
                <span class="trend-badge ${trendClass}">
                    ${trendIcon} ${Math.abs(d.pChange).toFixed(2)}%
                </span>
            </td>
            <td class="text-right">₹${formatCurrency(d.totalTurnover)}</td>
            <td class="text-right">${d.openInterest.toLocaleString()}</td>
            <td>
                 <div style="width: 60px; height: 4px; background: rgba(255,255,255,0.1); border-radius: 2px; overflow: hidden;">
                    <div style="width: ${Math.min(100, Math.abs(d.pChange) * 20)}%; height: 100%; background: ${d.pChange >= 0 ? '#4ade80' : '#f87171'};"></div>
                 </div>
            </td>
        `;
        tbody.appendChild(tr);
    });
}
function renderOptionsTable() {
    const tbody = els.optionsTableBody;
    tbody.innerHTML = '';

    const data = RAW_DATA.OPTSTK ? RAW_DATA.OPTSTK.data : [];
    // Filter for pChange > 10 and Sort Descending
    const filtered = data.filter(d => d.pChange > 10).sort((a, b) => b.pChange - a.pChange);

    filtered.forEach(d => {
        const tr = document.createElement('tr');
        const trendClass = d.pChange >= 0 ? 'trend-up' : 'trend-down';
        const trendIcon = d.pChange >= 0 ? '▲' : '▼';

        const name = d.underlying || d.symbol || d.identifier || 'N/A';
        tr.innerHTML = `
            <td>
                <div style="font-weight: 600;">${name}</div>
                <div style="font-size: 0.8rem; color: #94a3b8;">${d.identifier || ''}</div>
            </td>
            <td>${d.optionType}</td>
            <td class="text-right">${d.strikePrice}</td>
            <td class="text-right">₹${d.lastPrice.toLocaleString()}</td>
            <td class="text-right">
                <span class="trend-badge ${trendClass}">
                    ${trendIcon} ${Math.abs(d.pChange).toFixed(2)}%
                </span>
            </td>
            <td class="text-right">₹${formatCurrency(d.totalTurnover)}</td>
            <td class="text-right">${d.openInterest.toLocaleString()}</td>
        `;
        tbody.appendChild(tr);
    });
}



function renderPutsTable() {
    const tbody = els.putsTableBody;
    if (!tbody) return;
    tbody.innerHTML = '';

    const data = RAW_DATA.OPTSTK_PUTS ? RAW_DATA.OPTSTK_PUTS.data : [];
    // Filter for pChange > 10 and Sort Descending
    const filtered = data.filter(d => d.pChange > 10).sort((a, b) => b.pChange - a.pChange);

    if (filtered.length === 0) {
        tbody.innerHTML = '<tr><td colspan="7" style="text-align:center; color: #94a3b8;">No puts found with > 10% Price Change</td></tr>';
        return;
    }

    filtered.forEach(d => {
        const tr = document.createElement('tr');
        const trendClass = d.pChange >= 0 ? 'trend-up' : 'trend-down';
        const trendIcon = d.pChange >= 0 ? '▲' : '▼';

        const name = d.underlying || d.symbol || d.identifier || 'N/A';
        tr.innerHTML = `
            <td>
                <div style="font-weight: 600;">${name}</div>
                <div style="font-size: 0.8rem; color: #94a3b8;">${d.identifier || ''}</div>
            </td>
            <td>${d.optionType}</td>
            <td class="text-right">${d.strikePrice.toLocaleString()}</td>
            <td class="text-right">₹${d.lastPrice.toLocaleString()}</td>
            <td class="text-right">
                <span class="trend-badge ${trendClass}">
                    ${trendIcon} ${Math.abs(d.pChange).toFixed(2)}%
                </span>
            </td>
            <td class="text-right">₹${formatCurrency(d.totalTurnover)}</td>
            <td class="text-right">${d.openInterest.toLocaleString()}</td>
        `;
        tbody.appendChild(tr);
    });
}



function renderIndexOptionsTable() {
    const tbody = els.indexOptionsTableBody;
    if (!tbody) return;
    tbody.innerHTML = '';

    const data = RAW_DATA.OPTIDX ? RAW_DATA.OPTIDX.data : [];
    // Filter for pChange > 10 and Sort Descending
    const filtered = data.filter(d => d.pChange > 10).sort((a, b) => b.pChange - a.pChange);

    if (filtered.length === 0) {
        tbody.innerHTML = '<tr><td colspan="7" style="text-align:center; color: #94a3b8;">No Index Options found with >10% Price Change</td></tr>';
        return;
    }

    filtered.forEach(d => {
        const tr = document.createElement('tr');
        const trendClass = d.pChange >= 0 ? 'trend-up' : 'trend-down';
        const trendIcon = d.pChange >= 0 ? '▲' : '▼';

        const name = d.underlying || d.symbol || d.identifier || 'N/A';
        tr.innerHTML = `
            <td>
                <div style="font-weight: 600;">${name}</div>
                <div style="font-size: 0.8rem; color: #94a3b8;">${d.identifier || ''}</div>
            </td>
            <td>${d.optionType}</td>
            <td class="text-right">${d.strikePrice.toLocaleString()}</td>
            <td class="text-right">₹${d.lastPrice.toLocaleString()}</td>
            <td class="text-right">
                <span class="trend-badge ${trendClass}">
                    ${trendIcon} ${Math.abs(d.pChange).toFixed(2)}%
                </span>
            </td>
            <td class="text-right">₹${formatCurrency(d.totalTurnover)}</td>
            <td class="text-right">${d.openInterest.toLocaleString()}</td>
        `;
        tbody.appendChild(tr);
    });
}




function renderIndexPutsTable() {
    const tbody = els.indexPutsTableBody;
    if (!tbody) return;
    tbody.innerHTML = '';

    const data = RAW_DATA.OPTIDX_PUTS ? RAW_DATA.OPTIDX_PUTS.data : [];
    // Filter for pChange > 10 and Sort Descending
    const filtered = data.filter(d => d.pChange > 10).sort((a, b) => b.pChange - a.pChange);

    if (filtered.length === 0) {
        tbody.innerHTML = '<tr><td colspan="7" style="text-align:center; color: #94a3b8;">No Index Puts found with >10% Price Change</td></tr>';
        return;
    }

    filtered.forEach(d => {
        const tr = document.createElement('tr');
        const trendClass = d.pChange >= 0 ? 'trend-up' : 'trend-down';
        const trendIcon = d.pChange >= 0 ? '▲' : '▼';

        const name = d.underlying || d.symbol || d.identifier || 'N/A';
        tr.innerHTML = `
            <td>
                <div style="font-weight: 600;">${name}</div>
                <div style="font-size: 0.8rem; color: #94a3b8;">${d.identifier || ''}</div>
            </td>
            <td>${d.optionType}</td>
            <td class="text-right">${d.strikePrice.toLocaleString()}</td>
            <td class="text-right">₹${d.lastPrice.toLocaleString()}</td>
            <td class="text-right">
                <span class="trend-badge ${trendClass}">
                    ${trendIcon} ${Math.abs(d.pChange).toFixed(2)}%
                </span>
            </td>
            <td class="text-right">₹${formatCurrency(d.totalTurnover)}</td>
            <td class="text-right">${d.openInterest.toLocaleString()}</td>
        `;
        tbody.appendChild(tr);
    });
}

function formatCurrency(val) {
    if (val >= 10000000) return (val / 10000000).toFixed(2) + ' Cr';
    if (val >= 100000) return (val / 100000).toFixed(2) + ' L';
    return val.toLocaleString();
}

function renderHeatmap() {
    const container = els.heatmapContainer;
    if (!container) return;
    container.innerHTML = '';

    const data = RAW_DATA.heatmap || [];

    data.forEach(d => {
        const div = document.createElement('div');
        const val = d.pChange;
        let bgColor, textColor = '#f8fafc'; // Default white text

        if (val >= 3) bgColor = '#14532d';      // Deep Green (>3%)
        else if (val >= 1) bgColor = '#15803d'; // Green (1-3%)
        else if (val > 0) bgColor = '#16a34a';  // Light Green (0-1%)
        else if (val === 0) bgColor = '#475569'; // Neutral
        else if (val > -1) bgColor = '#ef4444'; // Light Red (0 to -1%)
        else if (val > -3) bgColor = '#b91c1c'; // Red (-1 to -3%)
        else bgColor = '#7f1d1d';               // Deep Red (<-3%)

        div.className = 'glass-card';
        div.style.backgroundColor = bgColor;
        div.style.color = textColor;
        div.style.padding = '8px';
        div.style.display = 'flex';
        div.style.flexDirection = 'column';
        div.style.justifyContent = 'space-between';
        div.style.minHeight = '60px'; // Reduced height
        div.style.transition = 'transform 0.2s';

        // Add hover effect via JS or could be CSS class
        div.onmouseover = () => div.style.transform = 'translateY(-2px)';
        div.onmouseout = () => div.style.transform = 'translateY(0)';

        div.innerHTML = `
            <div style="font-size: 0.7rem; font-weight: 700; text-transform: uppercase; margin-bottom: 4px; line-height: 1.1;">${d.index}</div>
            <div style="display: flex; justify-content: space-between; align-items: flex-end;">
                <div style="font-size: 0.95rem; font-weight: 600;">${d.current.toLocaleString()}</div>
                <div style="font-size: 0.8rem; font-weight: 500;">${d.pChange}%</div>
            </div>
        `;
        container.appendChild(div);
    });
}



function renderFiiDiiData(data, container) {
    if (!container) return;
    container.innerHTML = '';

    if (!data || data.length === 0) {
        // Fallback or empty state
        return;
    }

    data.forEach(d => {
        const div = document.createElement('div');
        div.className = 'glass-card';
        div.style.padding = '12px';
        div.style.display = 'flex';
        div.style.flexDirection = 'column';
        div.style.gap = '8px';

        const netVal = parseFloat(d.netValue.replace(/,/g, ''));
        const netColor = netVal >= 0 ? '#4ade80' : '#f87171'; // Green : Red

        div.innerHTML = `
            <div style="font-size: 0.9rem; font-weight: 700; color: #94a3b8; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 4px; margin-bottom: 4px;">
                ${d.category} <span style="font-size: 0.75rem; font-weight: 400; float: right;">${d.date}</span>
            </div>
            <div style="display: flex; justify-content: space-between;">
                <span style="font-size: 0.8rem; color: #cbd5e1;">Buy</span>
                <span style="font-size: 0.9rem; font-weight: 600;">${d.buyValue}</span>
            </div>
            <div style="display: flex; justify-content: space-between;">
                <span style="font-size: 0.8rem; color: #cbd5e1;">Sell</span>
                <span style="font-size: 0.9rem; font-weight: 600;">${d.sellValue}</span>
            </div>
            <div style="display: flex; justify-content: space-between; margin-top: 4px; padding-top: 4px; border-top: 1px solid rgba(255,255,255,0.05);">
                <span style="font-size: 0.85rem; font-weight: 600;">Net</span>
                <span style="font-size: 1rem; font-weight: 700; color: ${netColor};">${d.netValue}</span>
            </div>
        `;
        container.appendChild(div);
    });
}

function renderFiiDii() {
    renderFiiDiiData(RAW_DATA.fiidii, els.fiidiiContainer);
}

function renderFiiDiiNse() {
    renderFiiDiiData(RAW_DATA.fiidiiNse, els.fiidiiNseContainer);
}

function renderNiftyHeatmap() {
    renderGenericStockHeatmap(RAW_DATA.niftyHeatmap, els.niftyHeatmapContainer);
}

function renderNiftyBankHeatmap() {
    renderGenericStockHeatmap(RAW_DATA.niftyBankHeatmap, els.niftyBankHeatmapContainer);
}

function renderGenericStockHeatmap(data, container) {
    if (!container) return;
    container.innerHTML = '';

    if (!data || !Array.isArray(data)) return;

    // Filter: lastPrice > 1% or < 1% from open
    // Formula: abs( (lastPrice - open) / open ) > 0.01
    const filtered = data.filter(d => {
        if (!d.open || d.open === 0) return false;
        const changeFromOpen = (d.lastPrice - d.open) / d.open;
        return Math.abs(changeFromOpen) > 0.01;
    });

    // Sort by magnitude of change (descending)
    filtered.sort((a, b) => {
        const changeA = Math.abs((a.lastPrice - a.open) / a.open);
        const changeB = Math.abs((b.lastPrice - b.open) / b.open);
        return changeB - changeA;
    });


    if (filtered.length === 0) {
        container.innerHTML = '<div style="grid-column: 1/-1; text-align: center; color: #94a3b8; padding: 20px;">No stocks found with >1% change from Open</div>';
        return;
    }

    filtered.forEach(d => {
        const div = document.createElement('div');
        // Calculate change for color logic
        const changeFromOpen = ((d.lastPrice - d.open) / d.open) * 100;

        let bgColor, textColor = '#f8fafc';

        if (changeFromOpen >= 3) bgColor = '#14532d';
        else if (changeFromOpen >= 1) bgColor = '#15803d';
        else if (changeFromOpen > 0) bgColor = '#16a34a';
        else if (changeFromOpen === 0) bgColor = '#475569';
        else if (changeFromOpen > -1) bgColor = '#ef4444';
        else if (changeFromOpen > -3) bgColor = '#b91c1c';
        else bgColor = '#7f1d1d';

        div.className = 'glass-card';
        div.style.backgroundColor = bgColor;
        div.style.color = textColor;
        div.style.padding = '8px';
        div.style.display = 'flex';
        div.style.flexDirection = 'column';
        div.style.gap = '4px';
        div.style.minHeight = '70px';
        div.style.transition = 'transform 0.2s';
        div.style.cursor = 'pointer';
        div.onclick = () => window.open(`https://www.tradingview.com/chart/?symbol=NSE:${d.symbol}&interval=5`, '_blank');
        div.onmouseover = () => div.style.transform = 'translateY(-2px)';
        div.onmouseout = () => div.style.transform = 'translateY(0)';

        div.innerHTML = `
            <div style="font-size: 0.75rem; font-weight: 700; text-transform: uppercase;">${d.symbol}</div>
            <div style="font-size: 0.9rem; font-weight: 600;">${d.lastPrice.toLocaleString()}</div>
             <div style="display: flex; justify-content: space-between; align-items: flex-end; font-size: 0.7rem;">
                <span style="opacity: 0.8;">Open: ${d.open}</span>
                <span style="font-weight: 600;">${d.pChange}%</span>
            </div>
        `;
        container.appendChild(div);
    });
}

function renderOIGainersHeatmaps() {
    renderOIGainersStockHeatmap(RAW_DATA.oiGainersUp, els.oiGainersUpHeatmapContainer);
    renderOIGainersStockHeatmap(RAW_DATA.oiGainersDown, els.oiGainersDownHeatmapContainer);
}

function renderOIGainersStockHeatmap(data, container) {
    if (!container) return;
    container.innerHTML = '';

    if (!data || !Array.isArray(data) || data.length === 0) {
        container.innerHTML = '<div style="grid-column: 1/-1; text-align: center; color: #94a3b8; padding: 20px;">No stocks found</div>';
        return;
    }

    // Sort by magnitude of change (descending)
    data.sort((a, b) => Math.abs(b.day_change) - Math.abs(a.day_change));

    data.forEach(d => {
        const div = document.createElement('div');
        const changeFromOpen = d.day_change;

        let bgColor, textColor = '#f8fafc';

        if (changeFromOpen >= 3) bgColor = '#14532d';
        else if (changeFromOpen >= 1) bgColor = '#15803d';
        else if (changeFromOpen > 0) bgColor = '#16a34a';
        else if (changeFromOpen === 0) bgColor = '#475569';
        else if (changeFromOpen > -1) bgColor = '#ef4444';
        else if (changeFromOpen > -3) bgColor = '#b91c1c';
        else bgColor = '#7f1d1d';

        div.className = 'glass-card';
        div.style.backgroundColor = bgColor;
        div.style.color = textColor;
        div.style.padding = '8px';
        div.style.display = 'flex';
        div.style.flexDirection = 'column';
        div.style.gap = '4px';
        div.style.minHeight = '70px';
        div.style.transition = 'transform 0.2s';
        div.style.cursor = 'pointer';
        div.onclick = () => window.open(`https://www.tradingview.com/chart/?symbol=NSE:${d.symbol}&interval=5`, '_blank');
        div.onmouseover = () => div.style.transform = 'translateY(-2px)';
        div.onmouseout = () => div.style.transform = 'translateY(0)';

        div.innerHTML = `
            <div style="font-size: 0.75rem; font-weight: 700; text-transform: uppercase;">${d.symbol}</div>
            <div style="font-size: 0.9rem; font-weight: 600;">${d.current_price.toLocaleString()}</div>
             <div style="display: flex; justify-content: space-between; align-items: flex-end; font-size: 0.7rem;">
                <span style="opacity: 0.8;">Chg%</span>
                <span style="font-weight: 600;">${d.day_change}%</span>
            </div>
        `;
        container.appendChild(div);
    });
}

async function fetchAllData() {
    console.log('Starting data fetch...');

    // 0. OI Gainers Heatmap
    fetch('https://smartoptions.trendlyne.com/phoenix/api/fno/market/filter/?mtype=futures&expDate=2026-05-26&screenType=oi-gainers')
        .then(res => { if (!res.ok) throw new Error('OI Gainers Network Error'); return res.json(); })
        .then(data => {
            if (data && data.body && data.body.tableData) {
                const tableData = data.body.tableData;
                const parsedData = tableData.map(row => ({
                    symbol: row[0].name,
                    current_price: row[1],
                    day_change: row[2]
                }));

                RAW_DATA.oiGainersUp = parsedData.filter(d => d.day_change > 1);
                RAW_DATA.oiGainersDown = parsedData.filter(d => d.day_change < -1);

                renderOIGainersHeatmaps();
            }
        })
        .catch(e => {
            console.warn('OI Gainers fetch failed:', e);
        });

    // 1. Heatmap
    fetch('/api/heatmap-index?type=Broad%20Market%20Indices')
        .then(res => { if (!res.ok) throw new Error('Heatmap Network Error'); return res.json(); })
        .then(data => {
            if (data && Array.isArray(data)) {
                RAW_DATA.heatmap = data;
                console.log('Heatmap Data:', data);
                renderHeatmap();
                if (data[0]?.timeStamp) els.timestamp.innerText = `As on ${data[0].timeStamp} (Live)`;
            }
        })
        .catch(e => console.warn('Heatmap fetch failed:', e));

    // 1.5 FII/DII Data
    fetch('/api/fiidiiTradeReact')
        .then(res => { if (!res.ok) throw new Error('FII/DII Network Error'); return res.json(); })
        .then(data => {
            if (data && Array.isArray(data)) {
                RAW_DATA.fiidii = data;
                console.log('FII/DII Data:', data);
                renderFiiDii();
            }
        })
        .catch(e => {
            console.warn('FII/DII fetch failed:', e);
            // Fallback to sample data for demo if fetch fails (common with NSE API)
            const sampleData = [
                { "category": "DII", "date": "26-Dec-2025", "buyValue": "9980.68", "sellValue": "8208.12", "netValue": "1772.56" },
                { "category": "FII/FPI", "date": "26-Dec-2025", "buyValue": "12832.34", "sellValue": "13149.9", "netValue": "-317.56" }
            ];
            RAW_DATA.fiidii = sampleData;
            renderFiiDii();
        });

    // 1.6 FII/DII Data (NSE, BSE, MSEI)
    fetch('/api/fiidiiTradeNse')
        .then(res => { if (!res.ok) throw new Error('FII/DII NSE Network Error'); return res.json(); })
        .then(data => {
            if (data && Array.isArray(data)) {
                RAW_DATA.fiidiiNse = data;
                console.log('FII/DII NSE Data:', data);
                renderFiiDiiNse();
            }
        })
        .catch(e => {
            console.warn('FII/DII NSE fetch failed:', e);
            // Fallback sample data
            const sampleData = [
                { "category": "DII", "date": "26-Dec-2025", "buyValue": "9492.91", "sellValue": "7807.56", "netValue": "1685.35" },
                { "category": "FII/FPI", "date": "26-Dec-2025", "buyValue": "12711.43", "sellValue": "12944.3", "netValue": "-232.87" }
            ];
            RAW_DATA.fiidiiNse = sampleData;
            renderFiiDiiNse();
        });

    // 1.7 NIFTY 50 Stock Indices (Heatmap)
    fetch('/api/equity-stockIndices?index=NIFTY%2050')
        .then(res => { if (!res.ok) throw new Error('NIFTY 50 Network Error'); return res.json(); })
        .then(data => {
            if (data && data.data) {
                RAW_DATA.niftyHeatmap = data.data; // The array is in data.data
                console.log('NIFTY 50 Data:', data.data);
                renderNiftyHeatmap();
            }
        })
        .catch(e => {
            console.warn('NIFTY 50 fetch failed:', e);
            // Fallback sample data provided by user
            const sampleData = {
                "data": [
                    { "symbol": "NIFTY 50", "open": 26121.25, "lastPrice": 26042.3, "pChange": -0.38 }, // Index itself
                    { "symbol": "TITAN", "open": 3908.9, "lastPrice": 3994, "pChange": 2.17 },
                    { "symbol": "HINDALCO", "open": 865.25, "lastPrice": 873, "pChange": 0.99 },
                    { "symbol": "NESTLEIND", "open": 1264, "lastPrice": 1270, "pChange": 0.82 },
                    { "symbol": "NTPC", "open": 322.55, "lastPrice": 324.25, "pChange": 0.53 },
                    { "symbol": "CIPLA", "open": 1496.3, "lastPrice": 1504, "pChange": 0.51 },
                    { "symbol": "ADANIENT", "open": 2229.3, "lastPrice": 2231, "pChange": 0.37 },
                    { "symbol": "ONGC", "open": 233.84, "lastPrice": 234.64, "pChange": 0.37 },
                    { "symbol": "JSWSTEEL", "open": 1092.1, "lastPrice": 1094.3, "pChange": 0.27 },
                    { "symbol": "HINDUNILVR", "open": 2282.3, "lastPrice": 2288, "pChange": 0.25 },
                    { "symbol": "TMPV", "open": 359.2, "lastPrice": 360.05, "pChange": 0.24 },
                    { "symbol": "EICHERMOT", "open": 7300, "lastPrice": 7330, "pChange": 0.24 },
                    { "symbol": "AXISBANK", "open": 1225, "lastPrice": 1229, "pChange": 0.22 },
                    { "symbol": "RELIANCE", "open": 1554.7, "lastPrice": 1560, "pChange": 0.12 },
                    { "symbol": "ULTRACEMCO", "open": 11766, "lastPrice": 11778, "pChange": 0.12 },
                    { "symbol": "DRREDDY", "open": 1265, "lastPrice": 1267.3, "pChange": 0.12 },
                    { "symbol": "COALINDIA", "open": 403.8, "lastPrice": 402.3, "pChange": -0.01 },
                    { "symbol": "LT", "open": 4052, "lastPrice": 4051, "pChange": -0.06 },
                    { "symbol": "KOTAKBANK", "open": 2162, "lastPrice": 2161.7, "pChange": -0.09 },
                    { "symbol": "APOLLOHOSP", "open": 7182, "lastPrice": 7159.5, "pChange": -0.17 },
                    { "symbol": "GRASIM", "open": 2828, "lastPrice": 2821, "pChange": -0.21 },
                    { "symbol": "TRENT", "open": 4290, "lastPrice": 4280, "pChange": -0.22 },
                    { "symbol": "SBIN", "open": 968.95, "lastPrice": 966.5, "pChange": -0.25 },
                    { "symbol": "M&M", "open": 3636.7, "lastPrice": 3627, "pChange": -0.27 },
                    { "symbol": "INDIGO", "open": 5081.5, "lastPrice": 5066, "pChange": -0.31 },
                    { "symbol": "INFY", "open": 1663.4, "lastPrice": 1657, "pChange": -0.38 },
                    { "symbol": "SBILIFE", "open": 2025.4, "lastPrice": 2017.4, "pChange": -0.39 },
                    { "symbol": "ITC", "open": 406.5, "lastPrice": 404.9, "pChange": -0.42 },
                    { "symbol": "BEL", "open": 403, "lastPrice": 398.3, "pChange": -0.43 },
                    { "symbol": "TATACONSUM", "open": 1173.6, "lastPrice": 1174, "pChange": -0.44 },
                    { "symbol": "ADANIPORTS", "open": 1499.6, "lastPrice": 1487.1, "pChange": -0.48 },
                    { "symbol": "HDFCBANK", "open": 996, "lastPrice": 992, "pChange": -0.52 },
                    { "symbol": "JIOFIN", "open": 298, "lastPrice": 297.2, "pChange": -0.57 },
                    { "symbol": "TATASTEEL", "open": 169.89, "lastPrice": 169.05, "pChange": -0.6 },
                    { "symbol": "ICICIBANK", "open": 1356.5, "lastPrice": 1351, "pChange": -0.65 },
                    { "symbol": "MARUTI", "open": 16703, "lastPrice": 16590, "pChange": -0.68 },
                    { "symbol": "WIPRO", "open": 267.2, "lastPrice": 266.25, "pChange": -0.68 },
                    { "symbol": "BAJAJFINSV", "open": 2035.7, "lastPrice": 2020, "pChange": -0.77 },
                    { "symbol": "MAXHEALTH", "open": 1081.5, "lastPrice": 1073, "pChange": -0.78 },
                    { "symbol": "HCLTECH", "open": 1668, "lastPrice": 1661.2, "pChange": -0.81 },
                    { "symbol": "BHARTIARTL", "open": 2123, "lastPrice": 2106, "pChange": -0.83 },
                    { "symbol": "HDFCLIFE", "open": 753, "lastPrice": 748.1, "pChange": -0.96 },
                    { "symbol": "POWERGRID", "open": 268, "lastPrice": 265.45, "pChange": -0.97 },
                    { "symbol": "SUNPHARMA", "open": 1737, "lastPrice": 1720, "pChange": -0.98 },
                    { "symbol": "ETERNAL", "open": 281.8, "lastPrice": 281.85, "pChange": -1.05 }, // Manually added/adjusted from prompt for testing filter
                    { "symbol": "BAJAJ-AUTO", "open": 9182.5, "lastPrice": 9067, "pChange": -1.12 },
                    { "symbol": "TECHM", "open": 1630.5, "lastPrice": 1612.5, "pChange": -1.16 },
                    { "symbol": "TCS", "open": 3313.1, "lastPrice": 3276.8, "pChange": -1.27 },
                    { "symbol": "BAJFINANCE", "open": 1011.7, "lastPrice": 998.5, "pChange": -1.3 },
                    { "symbol": "SHRIRAMFIN", "open": 976.55, "lastPrice": 960.4, "pChange": -1.37 },
                    { "symbol": "ASIANPAINT", "open": 2785, "lastPrice": 2746.6, "pChange": -1.4 }
                ]
            };
            RAW_DATA.niftyHeatmap = sampleData.data;
            renderNiftyHeatmap();
        });

    // 1.8 NIFTY BANK Stock Indices (Heatmap)
    fetch('/api/equity-stockIndices?index=NIFTY%20BANK')
        .then(res => { if (!res.ok) throw new Error('NIFTY BANK Network Error'); return res.json(); })
        .then(data => {
            if (data && data.data) {
                RAW_DATA.niftyBankHeatmap = data.data;
                console.log('NIFTY BANK Data:', data.data);
                renderNiftyBankHeatmap();
            }
        })
        .catch(e => {
            console.warn('NIFTY BANK fetch failed:', e);
            // Fallback sample data provided by user
            const sampleData = {
                "data": [
                    { "symbol": "NIFTY BANK", "open": 59092.85, "lastPrice": 59010.75, "pChange": -0.29 },
                    { "symbol": "IDFCFIRSTB", "open": 84.12, "lastPrice": 85.08, "pChange": 1 },
                    { "symbol": "CANBK", "open": 149.8, "lastPrice": 150.71, "pChange": 0.69 },
                    { "symbol": "INDUSINDBK", "open": 841.05, "lastPrice": 853.55, "pChange": 0.65 },
                    { "symbol": "FEDERALBNK", "open": 261.7, "lastPrice": 262.55, "pChange": 0.31 },
                    { "symbol": "AUBANK", "open": 974.05, "lastPrice": 974.75, "pChange": 0.07 },
                    { "symbol": "KOTAKBANK", "open": 2162, "lastPrice": 2163.2, "pChange": -0.02 },
                    { "symbol": "SBIN", "open": 968.95, "lastPrice": 967.4, "pChange": -0.16 },
                    { "symbol": "AXISBANK", "open": 1225, "lastPrice": 1223.4, "pChange": -0.24 },
                    { "symbol": "ICICIBANK", "open": 1356.5, "lastPrice": 1353.1, "pChange": -0.49 },
                    { "symbol": "PNB", "open": 120.77, "lastPrice": 120.28, "pChange": -0.54 },
                    { "symbol": "BANKBARODA", "open": 289.2, "lastPrice": 288.65, "pChange": -0.65 },
                    { "symbol": "HDFCBANK", "open": 996, "lastPrice": 990.1, "pChange": -0.71 }
                ]
            };
            RAW_DATA.niftyBankHeatmap = sampleData.data;
            renderNiftyBankHeatmap();
        });

    // 2. Most Active Contracts (Futures)
    fetch('/api/snapshot-derivatives-equity?index=futures')
        .then(res => { if (!res.ok) throw new Error('Volume Network Error'); return res.json(); })
        .then(data => {
            console.log('API Response (Futures):', data);
            if (data && data.volume && data.volume.data) {
                RAW_DATA.volume.data = data.volume.data;
                console.log('Futures Volume Data:', data.volume.data);
                STATE.data = data.volume.data; // Update state
                renderDashboard(); // Re-render main table & metrics
            } else if (data && data.data) {
                // Fallback for previous assumption or other endpoints if they differ
                RAW_DATA.volume.data = data.data;
                STATE.data = data.data;
                renderDashboard();
            } else {
                console.warn('Unexpected Futures Data Structure:', data);
            }
        })
        .catch(e => console.warn('Volume fetch failed:', e));

    // 3. Index Options Calls (Volume)
    fetch('/api/snapshot-derivatives-equity?index=calls-index-vol')
        .then(res => { if (!res.ok) throw new Error('Index Calls Network Error'); return res.json(); })
        .then(data => {
            console.log('API Response (Index Calls):', data);
            const indexCalls = data.OPTIDX ? data.OPTIDX.data : data.data;
            if (indexCalls) {
                RAW_DATA.OPTIDX = { data: indexCalls };
                console.log('Index Calls Data:', indexCalls);
                renderIndexOptionsTable();
            } else {
                console.warn('Unexpected Index Calls Data Structure:', data);
            }
        })
        .catch(e => console.warn('Index Calls fetch failed:', e));

    // 3.1 Index Options Puts (Volume)
    fetch('/api/snapshot-derivatives-equity?index=puts-index-vol')
        .then(res => { if (!res.ok) throw new Error('Index Puts Network Error'); return res.json(); })
        .then(data => {
            console.log('API Response (Index Puts):', data);
            const indexPuts = data.OPTIDX ? data.OPTIDX.data : data.data; // Assuming puts also come under OPTIDX or data
            if (indexPuts) {
                RAW_DATA.OPTIDX_PUTS = { data: indexPuts };
                console.log('Index Puts Data:', indexPuts);
                renderIndexPutsTable();
            } else {
                console.warn('Unexpected Index Puts Data Structure:', data);
            }
        })
        .catch(e => console.warn('Index Puts fetch failed:', e));

    // 4. Stock Options Calls (Volume)
    fetch('/api/snapshot-derivatives-equity?index=calls-stocks-vol')
        .then(res => { if (!res.ok) throw new Error('Stock Calls Network Error'); return res.json(); })
        .then(data => {
            console.log('API Response (Stock Calls):', data);
            const stockCalls = data.OPTSTK ? data.OPTSTK.data : data.data;
            if (stockCalls) {
                RAW_DATA.OPTSTK = { data: stockCalls };
                console.log('Stock Calls Data:', stockCalls);
                renderOptionsTable();
            } else {
                console.warn('Unexpected Stock Calls Data Structure:', data);
            }
        })
        .catch(e => console.warn('Stock Calls fetch failed:', e));

    // 5. Stock Options Puts (Volume)
    fetch('/api/snapshot-derivatives-equity?index=puts-stocks-vol')
        .then(res => { if (!res.ok) throw new Error('Stock Puts Network Error'); return res.json(); })
        .then(data => {
            console.log('API Response (Stock Puts):', data);
            const stockPuts = data.OPTSTK ? data.OPTSTK.data : data.data;
            if (stockPuts) {
                RAW_DATA.OPTSTK_PUTS = { data: stockPuts };
                console.log('Stock Puts Data:', stockPuts);
                renderPutsTable();
            } else {
                console.warn('Unexpected Stock Puts Data Structure:', data);
            }
        })
        .catch(e => console.warn('Stock Puts fetch failed:', e));

    //https://www.nseindia.com/api/snapshot-derivatives-equity?index=calls-stocks-vol

    fetch('/api/snapshot-derivatives-equity?index=calls-stocks-vol')
        .then(res => { if (!res.ok) throw new Error('Stock Options Network Error'); return res.json(); })
        .then(data => {
            if (data && data.data) {
                // Split logic
                RAW_DATA.OPTSTK = { data: data.data.filter(d => d.optionType === 'Call') };
                //    RAW_DATA.OPTSTK_PUTS = { data: data.data.filter(d => d.optionType === 'Put') };
                renderOptionsTable();
                renderPutsTable();
            }
        })
        .catch(e => console.warn('Stock Options fetch failed:', e));
}

// Start
init();
