import { listService } from "../../../services";
const actions = {
  async getListDetail(vuexContext, data) {
    const res = await listService.fetchListDetail(data);
    vuexContext.commit("GET_LIST_DETAIL", res);
  },
};
export default actions;
