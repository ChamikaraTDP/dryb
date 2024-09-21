import { IProperty, Property } from "../lib/model/property.model";

async function create(property: IProperty) {
  const item = new Property(property);

  await item.save();

  return item;
}


async function findOne(name: string) {
  const item = await Property.findOne({ name }).exec();

  return item;
}

export { 
  create as createProperty, 
  findOne as readProperty
};
