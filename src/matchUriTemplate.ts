export const matchUriTemplate = (template, params) => {
    const paramEntries = Object.entries(params).filter(([propName, value]) => value);

    paramEntries.forEach(([propName, value]) => {
        const p = `:${propName}`;

        if (template.includes(p)) {
            template = template.replace(p, value)
        } else  {
            const delim = template.includes('?') ? '&' : '?';
            template = `${template}${delim}${propName}=${value}`;
        }
    });

    return template;
}