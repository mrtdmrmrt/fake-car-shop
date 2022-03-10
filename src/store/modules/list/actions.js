import { listService } from "../../../services";
const actions = {
  async getList(vuexContext, data) {
    const res = await listService.fetchList(data);
    vuexContext.commit("GET_LIST", res);
  },
};
export default actions;
