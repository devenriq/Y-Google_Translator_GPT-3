import { Form } from 'react-bootstrap'
import { SectionType } from '../types.d'

interface Props {
  autoFocus: boolean
  loading?: undefined
  onChange: (value: string) => void
  placeholder: string
  type: SectionType
  value: string
}

const commonStyles = { border: 0, height: '200px' }

export const TextArea = ({ autoFocus, placeholder, loading, type, value, onChange }: Props) => {
  const styles = type === SectionType.From
    ? commonStyles
    : { ...commonStyles, backgroundColor: '#f5f5f5' }

  return (
    <Form.Control
    autoFocus={type === SectionType.From}
      as='textarea'
      placeholder='Introducir texto'
      style={styles}
    />
  )
}
