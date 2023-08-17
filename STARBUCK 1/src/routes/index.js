import { Router } from "express"

const router = Router()

router.get('/', (req, res) => res.render('index', { title: 'Home' }))
router.get('/acerca de', (req, res) => res.render('acerca de', { title: 'acerca de' }))
router.get('/servicios', (req, res) => res.render('servicios', { title: 'Servicios' }))
router.get('/contacto', (req, res) => res.render('contacto', { title: 'Contacto' }))


export default router