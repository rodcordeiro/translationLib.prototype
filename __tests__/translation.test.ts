import pt_br from '../translations/pt_br';
import en_us from '../translations/en_us';
import { translation } from '../src'

describe('Translation test', () => {
  it('should return the correct translation', () => {
    expect(translation('screens.configuration.url_placeholder', pt_br)).toBe('Url serviço:')
  })

  it('should throw error when last key returns an object', () => {
    expect(() => translation('screens.configuration', pt_br)).toThrowError('Translation key not found')
  })

  it('should translate dynamically', () => {
    expect({
      pt_br: translation('screens.configuration.url_placeholder', pt_br),
      en_us: translation('screens.configuration.url_placeholder', en_us)
    }).toEqual({
      pt_br: 'Url serviço:',
      en_us: 'API url:'
    })

  })

})