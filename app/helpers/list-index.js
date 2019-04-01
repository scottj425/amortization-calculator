import { helper } from '@ember/component/helper';

export function listIndex(params/*, hash*/) {
  return parseInt(params) + 1;
}

export default helper(listIndex);
