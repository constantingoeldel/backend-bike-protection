import { Router } from 'express'
import { addDocument } from '../services'

const router = Router()

router.post('/', async (req, res, next) => {
  const data = req.body
  const document = {
    time: data.time,
    message: data.data,
    seqNumber: data.seqNumber,
    lqi: data.lqi,
    linkQuality: data.linkQuality,
    operatorName: data.operatorName,
    countryCode: data.countryCode,
    atlasNative: data.computedLocation,
  }
  addDocument(`/devices/${data.deviceId}/locations`, document)
  res.status(200).end('Success!')
})
export default router
