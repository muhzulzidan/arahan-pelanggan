import "normalize.css"
import 'typeface-barlow';
import  "./src/css/index.css";


import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {faEnvelope } from "@fortawesome/free-regular-svg-icons"
import {
    faUser,
    faSearch,
    faChevronCircleLeft,
    faChevronCircleRight,
    faGlobe,
} from '@fortawesome/free-solid-svg-icons'

library.add(fab, faUser, faSearch, faChevronCircleRight, faChevronCircleLeft, faEnvelope, faGlobe)