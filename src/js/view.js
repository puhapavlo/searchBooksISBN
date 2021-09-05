module.exports = {
  render(templateName, model) {
    const renderFn = Handlebars.compile(templateName);

    return renderFn(model);
}
}