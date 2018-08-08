import Mock from "mockjs";
import { getDynamic } from "./dynamic";

let getDynamicUrl = new RegExp(`/dynamic`);
Mock.mock(getDynamicUrl, "get", getDynamic);

export default Mock;
