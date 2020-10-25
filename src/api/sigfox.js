import { Router } from 'express'
import { addDocument } from '../services'

const router = Router()

router.post('/', async (req, res, next) => {
  const data = req.body
  const document = {
    message: data.data,
    timestamp: data.time,
    seqNumber: data.seqNumber,
  }
  addDocument(`/devices/${data.deviceId}/locations`, document)
  res.status(200).end('Document successfully written!')
})
export default router
