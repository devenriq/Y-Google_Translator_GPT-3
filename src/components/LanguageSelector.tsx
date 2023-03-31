import { Form } from 'react-bootstrap'
import { type FC } from 'react'

import { AUTO_LANGUAGE, SUPPORTED_LANGUAGES } from '../constants'
import { SectionType, type FromLanguage, type Language } from '../types.d'

type Props =
| { type: SectionType.From, value: FromLanguage, onChange: (language: FromLanguage) => void }
| { type: SectionType.To, value: Language, onChange: (language: Language) => void }

export const LanguageSelector: FC<Props> = ({ onChange, type, value }) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value as Language)
  }

  return (
    <Form.Select aria-label = 'Selecciona el idioma' onChange={handleChange} value={value}>
      {type === SectionType.From && <option value={AUTO_LANGUAGE}>Detectar Idioma</option>}

      {
        Object.entries(SUPPORTED_LANGUAGES).map(([key, literal]) => (
          <option value={key} key={key}>
            {literal}
          </option>
        ))
      }
    </Form.Select>
  )
}
