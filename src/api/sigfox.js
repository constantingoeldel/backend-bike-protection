import { Router } from 'express'
import { setDocument } from '../services'

const router = Router()

router.post('/', async (req, res, next) => {
  const document = req.body
  setDocument(`/devices/${document.device}/locations/${document.time}`, document)
  res.status(200).end('Document successfully written!')
})

export default router
