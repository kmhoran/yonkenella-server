import { ITestType } from "../schema/types/schemaTypes";

const testResolver = {
    test(): ITestType {
        return {
            timestamp: new Date().toISOString(),
            id: Math.floor(Math.random() * 1000)
        }
    }


}

export default testResolver;