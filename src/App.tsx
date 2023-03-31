import { useStore } from './hooks/useStore'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Button, Form } from 'react-bootstrap'

import { ArrowsIcon } from './components/Icons'
import { AUTO_LANGUAGE } from './constants'
import { LanguageSelector } from './components/LanguageSelector'
import { SectionType } from './types.d'

function App () {
  const { fromLanguage, toLanguage, interchangeLanguages, setFromLanguage, setToLanguage } = useStore()

  return (
    <Container className="" fluid>
      <h1>Google Translate</h1>

      <Row>
        <Col>
          <LanguageSelector
            onChange={setFromLanguage }
            type={SectionType.From}
            value={fromLanguage}
          />
          <Form.Control
            as='textarea'
            placeholder='Introducir texto'
            autoFocus
            style={{ height: '150px' }}
            />
        </Col>
        <Col>
          <Button
            variant=''
            disabled={fromLanguage === AUTO_LANGUAGE}
            onClick={interchangeLanguages}
          >
            <ArrowsIcon />
          </Button>
        </Col>
        <Col>
        <LanguageSelector
          onChange={ setToLanguage }
          type={SectionType.To}
          value={toLanguage}
          />
                   <Form.Control
            as='textarea'
            placeholder='Traducción'
            style={{ height: '150px' }}
            />
        </Col>
      </Row>

    </Container>
  )
}

export default App
