import _ from "lodash"
import { TreeNode } from "."
import { v4 } from "uuid"

const getNodesFlat = <TRecord>(
  raw: TRecord[],
  attribute: string
): TreeNode[] => {
  return _.toArray(
    _.chain(raw)
      .map((el: TRecord) => {
        return {
          //@ts-ignore
          caption: el[`${attribute}`],
          uuid: v4()
        } as TreeNode
      })
      .value()
  )
}

const getNodesByHierarchy = <TRecord>(
  raw: TRecord[],
  attributesHierarchy: string[]
): TreeNode[] => {
  if (attributesHierarchy.length === 1) {
    return getNodesFlat(raw, attributesHierarchy[0])
  }
  const attribute = _.first(attributesHierarchy)
  //@ts-ignore
  const grouped = _.groupBy(raw, (el: TRecord) => el[`${attribute}`])
  return _.toArray(
    _.chain(grouped)
      .keys()
      .map((key) => {
        return {
          caption: key,
          children: getNodesByHierarchy(
            grouped[key],
            _.slice(attributesHierarchy, 1, attributesHierarchy.length)
          ),
          uuid: v4()
        } as TreeNode
      })
      .value()
  )
}

/**
 * Given a flat array of nodes e.g.:
 *
 * raw = [{ name: "John", occupation: "teacher", salary: "30-60K", children: "3" },
 *        { name: "Mary", occupation: "bartender", salary: "10-30K", children: "0" },
 *        { name: "John", occupation: "teacher", salary: "30-60K", children: "2" },
 *        { name: "John", occupation: "bartender", salary: "10-50K", children: "3" },
 *        { name: "John", occupation: "fireman", salary: "30-60K", children: "1" },
 *        { name: "Alex", occupation: "fireman", salary: "30-60K", children: "3" },
 *        { name: "John", occupation: "programmer", salary: "50-100K", children: "2" },
 *        { name: "John", occupation: "director", salary: "100-150K", children: "3" },
 *        { name: "Ann", occupation: "nurse", salary: "30-60K", children: "1" }]
 *
 * converts it to a given hierarchy in tree by attributes given, e.g.
 * convertRawDataToTreeNodeWithHierarchy(raw, ["salary", "occupation"]) will create
 * a 2-level tree hierarchy allowing to quicky find what are the most paid jobs
 *
 * convertRawDataToTreeNodeWithHierarchy(raw, ["children", "salary", "occupation"]) will create
 * a 3-level tree hierarchy allowing to drill down how kids correspond to salary
 */
export const convertRawDataToTreeNodeWithHierarchy = <TRecord>(
  hierarchy: string[],
  masterNodeCaption: string,
  raw: TRecord[]
): TreeNode => {
  return {
    caption: masterNodeCaption,
    children: getNodesByHierarchy<TRecord>(raw, hierarchy),
    uuid: v4()
  }
}
