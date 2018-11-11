const contentTypeOptions = Object.keys(deserializers).join('|');
const methodOptions = Object.keys(requestMethods).join('|');

export const reg = new RegExp(`(${contentTypeOptions})?;(${methodOptions})?@([\\s\\S]+)`);

const hydrate: any = (plan: ConnectionPlan) => (_, ct, m, template) => {
    plan.deserialize = deserializers[ct || 'j']
    plan.requestMethod = requestMethods[m || 'g'];
    plan.template = template;
};

const parse = (str: string) => {
    let plan = {} as ConnectionTemplate;
    str.replace(reg, hydrate(plan));

    return plan;
}
