export const createDefaultProps = (params, { addTranslate = true } = {}) => ({
  translate: addTranslate ? (value) => (Array.isArray(value) ? value[0] : value) : undefined,
  ...params,
})

export const emptyFunc = () => {}
