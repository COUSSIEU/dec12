import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: '69152982-95c6-4eca-9378-67a8efb21bb7',
};

export const sampleWithPartialData: IAuthority = {
  name: '94642f54-3541-41fd-a67a-21578fc7d13b',
};

export const sampleWithFullData: IAuthority = {
  name: 'c9740b32-884c-41d1-a2b9-c08fb3d7aeb7',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
