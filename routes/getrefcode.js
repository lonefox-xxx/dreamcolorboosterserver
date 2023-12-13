const { getLogs, addLogs } = require('../helper/datatabaseManagement');
const generaterefcode = require('../helper/genaraterfcode');


async function getrefcode(req, res, database) {
    const { paytm } = req.body
    const { data } = await getLogs({ number: paytm }, 'refer_data', database)
    console.log(data)
    if (data.length <= 0) {
        const ref = generaterefcode(10)

        const refdata = {
            data: {
                number: paytm,
                refcode: ref,
                timeadded: new Date().getTime()
            }
        }

        await addLogs(refdata, 'refer_data', database)
        res.send({ success: true, refcode: ref })

    } else {
        res.send({ success: true, refcode: data[0].refcode })
    }

}

module.exports = getrefcode 