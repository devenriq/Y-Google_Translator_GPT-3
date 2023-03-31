import { useStore } from './hooks/useStore'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Button, Form, Stack } from 'react-bootstrap'

import { ArrowsIcon } from './components/Icons'
import { AUTO_LANGUAGE } from './constants'
import { LanguageSelector } from './components/LanguageSelector'
import { SectionType } from './types.d'
import { TextArea } from './components/TextArea'

function App () {
  const { fromLanguage, toLanguage, interchangeLanguages, fromText, result, setFromLanguage, setToLanguage, setFromText, setResult } = useStore()

  return (
    <Container className="" fluid>
      <h2>Google Translate</h2>

      <Row>
        <Col>
          <Stack gap={2} >
            <LanguageSelector
              onChange={setFromLanguage }
              type={SectionType.From}
              value={fromLanguage}
            />
            <TextArea
              placeholder='Introducir texto'
              type={SectionType.From}
              value={fromText}
              onChange={setFromText}
              />
          </Stack>
        </Col>
        <Col xs='auto'>
          <Button
            variant=''
            disabled={fromLanguage === AUTO_LANGUAGE}
            onClick={interchangeLanguages}
          >
            <ArrowsIcon />
          </Button>
        </Col>
        <Col>
        <Stack gap={2}>
          <LanguageSelector
            onChange={ setToLanguage }
            type={SectionType.To}
            value={toLanguage}
            />
          <TextArea
            placeholder='Traducción'
            type= {SectionType.To}
            value={result}
            onChange={setResult}
            />
        </Stack>
        </Col>
      </Row>

    </Container>
  )
}

export default App
