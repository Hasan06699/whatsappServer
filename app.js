
const http = require('http');
const WAZIPER = require("./waziper/waziper.js");

// // Define routes
// WAZIPER.app.get('/instance', WAZIPER.cors, async (req, res) => {
//     const access_token = req.query.access_token;
//     const instance_id = req.query.instance_id;

//     try {
//         await WAZIPER.instance(access_token, instance_id, res, async (client) => {
//             await WAZIPER.get_info(instance_id, res);
//         });
//     } catch (error) {
//         res.status(500).json({ error: 'Failed to fetch instance info' });
//     }
// });

// WAZIPER.app.get('/get_qrcode', WAZIPER.cors, async (req, res) => {
//     const access_token = req.query.access_token;
//     const instance_id = req.query.instance_id;

//     try {
//         await WAZIPER.instance(access_token, instance_id, res, async (client) => {
//             await WAZIPER.get_qrcode(instance_id, res);
//         });
//     } catch (error) {
//         res.status(500).json({ error: 'Failed to fetch QR code' });
//     }
// });

// WAZIPER.app.get('/get_groups', WAZIPER.cors, async (req, res) => {
//     const access_token = req.query.access_token;
//     const instance_id = req.query.instance_id;

//     try {
//         await WAZIPER.instance(access_token, instance_id, res, async (client) => {
//             await WAZIPER.get_groups(instance_id, res);
//         });
//     } catch (error) {
//         res.status(500).json({ error: 'Failed to fetch groups' });
//     }
// });

// WAZIPER.app.get('/logout', WAZIPER.cors, async (req, res) => {
//     const access_token = req.query.access_token;
//     const instance_id = req.query.instance_id;
//     try {
//         WAZIPER.logout(instance_id, res);
//     } catch (error) {
//         res.status(500).json({ error: 'Failed to log out' });
//     }
// });

// WAZIPER.app.post('/send_message', WAZIPER.cors, async (req, res) => {
//     const access_token = req.query.access_token;
//     const instance_id = req.query.instance_id;

//     try {
//         await WAZIPER.instance(access_token, instance_id, res, async (client) => {
//             WAZIPER.send_message(instance_id, access_token, req, res);
//         });
//     } catch (error) {
//         res.status(500).json({ error: 'Failed to send message' });
//     }
// });

// WAZIPER.app.get('/', WAZIPER.cors, async (req, res) => {
//     return res.json({ status: 'success', message: "Welcome to WAZIPER" });
// });

// // Create server and listen
// const PORT = process.env.PORT || 8000;
// WAZIPER.server = http.createServer(WAZIPER.app);

// WAZIPER.server.listen(PORT, () => {
//     console.log(`WAZIPER IS LIVE on port ${PORT}`);
// });

// const WAZIPER = require("./waziper/waziper.js");

WAZIPER.app.get('/instance', WAZIPER.cors, async (req, res) => {
    var access_token = req.query.access_token;
    var instance_id = req.query.instance_id;

    await WAZIPER.instance(access_token, instance_id, res, async (client) => {
        await WAZIPER.get_info(instance_id, res);
    });
});

WAZIPER.app.get('/get_qrcode', WAZIPER.cors, async (req, res) => {
    var access_token = req.query.access_token;
    var instance_id = req.query.instance_id;

    await WAZIPER.instance(access_token, instance_id, res, async (client) => {
        await WAZIPER.get_qrcode(instance_id, res);
    });
});

WAZIPER.app.get('/get_groups', WAZIPER.cors, async (req, res) => {
    var access_token = req.query.access_token;
    var instance_id = req.query.instance_id;

    await WAZIPER.instance(access_token, instance_id, res, async (client) => {
        await WAZIPER.get_groups(instance_id, res);
    });
});

WAZIPER.app.get('/logout', WAZIPER.cors, async (req, res) => {
    var access_token = req.query.access_token;
    var instance_id = req.query.instance_id;
    WAZIPER.logout(instance_id, res);
});

WAZIPER.app.post('/send_message', WAZIPER.cors, async (req, res) => {
    var access_token = req.query.access_token;
    var instance_id = req.query.instance_id;

    await WAZIPER.instance(access_token, instance_id, res, async (client) => {
        WAZIPER.send_message(instance_id, access_token, req, res);
    });
});

WAZIPER.app.get('/', WAZIPER.cors, async (req, res) => {
    return res.json({ status: 'success', message: "Welcome to WAZIPER" });
});

WAZIPER.server.listen(7777, () => {
    console.log("WAZIPER IS LIVE");
});