const  express=require('express')
const {Reg} = require('../CONTROLLER/Regcontroller')
const {log1}=require('../CONTROLLER/Regcontroller')
const {bookfn,tablebook,view, updatebook, deletebook} = require('../CONTROLLER/Bookcontroller')
const { clientfn, clinttable, clietview, clientdlt, clientupdate } = require('../CONTROLLER/Clientcontroller')
const { cstmrfn, customertable, customerview, customerdelete, customerupdate } = require('../CONTROLLER/Customercontroller')


const router =express.Router()
router.route('/register').post(Reg)
router.route('/login').post(log1)
router.route('/bookform').post(bookfn)
router.route('/booktable').get(tablebook)
router.route('/view/:id').get(view)
router.route('/delbook/:id').delete(deletebook)
router.route('/upd/:id').put(updatebook)
router.route('/clintreg').post(clientfn)
router.route('/clintab').get(clinttable)
router.route('/viewclient/:id').get(clietview)
router.route('/cldelete/:id').delete(clientdlt)
router.route('/clupdate/:id').put(clientupdate)
router.route('/cstmr').post(cstmrfn)
router.route('/tablecustomer').get(customertable)
router.route('/cstmrview/:id').get(customerview)
router.route('/csdelete/:id').delete(customerdelete)
router.route('/customerupdate/:id').put(customerupdate)


module.exports=router