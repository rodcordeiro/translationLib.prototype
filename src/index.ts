/** 
Recebe como parametro o caminho para a informação, separado por *'.'*, e retorna o valor correto.
@example 'translations.screens.configuration.url_placeholder'
@returns string

*/
export function translation(param: string, lang: Object): string {
  // Gera um objeto do parametro, separando as chaves para localização da tradução 
  const keys = param.split('.')

  // Executa um reduce no array gerado, passando como valor inicial a linguagem selecionada e assim, retornando a cada nível a chave passada
  const result = keys.reduce((prev: Object, next: string) => {
    return prev[next]
  }, lang) as string;
  if(typeof result !== 'string'){
    throw new Error('Translation key not found')
  }
  return result
}