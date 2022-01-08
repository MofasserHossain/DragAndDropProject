import React, { useState } from 'react'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import { Col, Row } from 'reactstrap'
import Button from '../common/Button'
import CostCard from '../common/CostCard'

// fake data generator
const getItems = (count, offset = 0) =>
  Array.from({ length: count }, (v, k) => k).map(k => ({
    id: `${k + offset + Math.floor(Math.random() * (999 - 100 + 1) + 100)}`,
    content: `Salaries Expenses`,
    amount: Math.floor(Math.random() * (999 - 100 + 1) + 100),
  }))

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list)
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)

  return result
}

/**
 * Moves an item from one list to another list.
 */
const move = (source, destination, droppableSource, droppableDestination) => {
  const sourceClone = Array.from(source)
  const destClone = Array.from(destination)
  const [removed] = sourceClone.splice(droppableSource.index, 1)

  destClone.splice(droppableDestination.index, 0, removed)

  const result = {}
  result[droppableSource.droppableId] = sourceClone
  result[droppableDestination.droppableId] = destClone

  return result
}

const grid = 8

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: 'none',
  padding: grid * 2,
  margin: `0 0 ${grid}px 0`,
  // change background colour if dragging
  background: isDragging ? 'lightgreen' : '#A6B0CF',
  borderRadius: '10px',
  // styles we need to apply on draggables
  ...draggableStyle,
})

const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? 'lightblue' : '',
  display: 'grid',
  //   gridTemplateColumns: '1fr 1fr',
  //   columnGap: '10px',
  padding: grid,
  width: '100%',
  position: 'relative',
  //   height: '100%',
})

const Statement = () => {
  const [state, setState] = useState({
    items: getItems(12),
    selected: getItems(12),
    revenue: getItems(0),
    cost: getItems(0),
  })
  console.log(`Statement ~ state`, state)
  const id2List = {
    droppable: 'items',
    droppable2: 'selected',
    droppable3: 'revenue',
    droppable4: 'cost',
  }
  const getList = id => state[id2List[id]]
  const onDragEnd = result => {
    const { source, destination } = result
    // dropped outside the list
    if (!destination) {
      return
    }
    if (source.droppableId === destination.droppableId) {
      const items = reorder(
        getList(source.droppableId),
        source.index,
        destination.index
      )
      console.log(`Statement ~ items`, items)
      let newState = null
      if (source.droppableId === 'droppable') {
        newState = { items: items }
      }
      if (source.droppableId === 'droppable2') {
        newState = { selected: items }
      }
      if (source.droppableId === 'droppable3') {
        newState = { revenue: items }
      }
      if (source.droppableId === 'droppable3') {
        newState = { cost: items }
      }
      setState({ ...state, ...newState })
    } else {
      const result = move(
        getList(source.droppableId),
        getList(destination.droppableId),
        source,
        destination
      )
      console.log(`Statement ~ result`, result)
      setState({
        ...state,
        items: !!result?.droppable ? result.droppable : state.items,
        selected: !!result?.droppable2 ? result.droppable2 : state.selected,
        revenue: !!result?.droppable3 ? result.droppable3 : state.revenue,
        cost: !!result?.droppable4 ? result.droppable4 : state.cost,
      })
    }
  }
  const findAmount = data => {
    return data.reduce((dt, item) => dt + item.amount, 0)
  }
  const totalNetProfit = () => {
    return findAmount(state.revenue) - findAmount(state.cost)
  }
  console.log(findAmount(state.revenue))
  return (
    <div className="mt-5">
      <DragDropContext onDragEnd={onDragEnd}>
        <Row className="">
          <Col>
            <CostCard
              text={'Revenue'}
              amount={findAmount(state.revenue) || '0'}
            >
              <Droppable droppableId="droppable3">
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    style={getListStyle(snapshot.isDraggingOver)}
                  >
                    {state.revenue.length > 0 ? (
                      state.revenue.map((item, index) => (
                        <Draggable
                          key={item.id}
                          draggableId={item.id}
                          index={index}
                        >
                          {(provided, snapshot) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              style={getItemStyle(
                                snapshot.isDragging,
                                provided.draggableProps.style
                              )}
                            >
                              <div className="flex justify-between items-center">
                                <div>
                                  <i className="fas fa-ellipsis-v"></i>
                                  <i className="fas fa-ellipsis-v"></i>
                                </div>
                                <div>{item.content}</div>
                                <div>{item.amount}</div>
                              </div>
                            </div>
                          )}
                        </Draggable>
                      ))
                    ) : (
                      <div className="h-full flexCenter mt-10">
                        <div className="bg-gray-600 w-8 h-8 flexCenter rounded-full text-white">
                          <i className="fa fa-plus"></i>
                        </div>
                      </div>
                    )}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </CostCard>
            <CostCard text={'Cost'} amount={findAmount(state.cost) || '0'}>
              <Droppable droppableId="droppable4">
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    style={getListStyle(snapshot.isDraggingOver)}
                  >
                    {state.cost.length > 0 ? (
                      state.cost.map((item, index) => (
                        <Draggable
                          key={item.id}
                          draggableId={item.id}
                          index={index}
                        >
                          {(provided, snapshot) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              style={getItemStyle(
                                snapshot.isDragging,
                                provided.draggableProps.style
                              )}
                            >
                              <div className="flexCenterBetween">
                                <div>
                                  <i className="fas fa-ellipsis-v"></i>
                                  <i className="fas fa-ellipsis-v"></i>
                                </div>
                                <div>{item.content}</div>
                                <div>{item.amount}</div>
                              </div>
                            </div>
                          )}
                        </Draggable>
                      ))
                    ) : (
                      <div className="h-full flexCenter mt-10">
                        <div className="bg-gray-600 w-8 h-8 flexCenter rounded-full text-white">
                          <i className="fa fa-plus"></i>
                        </div>
                      </div>
                    )}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </CostCard>

            {/* total */}
            <Button
              className={
                'btnFil w-full bg-yellow-500 text-black font-semibold py-3'
              }
              onClick={() => {}}
            >
              <span>Total Net Profit</span>{' '}
              <span>BTD {totalNetProfit() || '0'}</span>
            </Button>
          </Col>
          <Col>
            <Row>
              <Col>
                <Droppable droppableId="droppable2">
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      style={getListStyle(snapshot.isDraggingOver)}
                    >
                      {state.selected.map((item, index) => (
                        <Draggable
                          key={item.id}
                          draggableId={item.id}
                          index={index}
                        >
                          {(provided, snapshot) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              style={getItemStyle(
                                snapshot.isDragging,
                                provided.draggableProps.style
                              )}
                            >
                              <div className="flex justify-between items-center">
                                <div>
                                  <i className="fas fa-ellipsis-v"></i>
                                  <i className="fas fa-ellipsis-v"></i>
                                </div>
                                <div>{item.content}</div>
                                <div>{item.amount}</div>
                              </div>
                            </div>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </Col>
              <Col>
                <Droppable droppableId="droppable">
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      style={getListStyle(snapshot.isDraggingOver)}
                    >
                      {state.items.map((item, index) => (
                        <Draggable
                          key={item.id}
                          draggableId={item.id}
                          index={index}
                        >
                          {(provided, snapshot) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              style={getItemStyle(
                                snapshot.isDragging,
                                provided.draggableProps.style
                              )}
                            >
                              <div className="flex justify-between items-center">
                                <div>
                                  <i className="fas fa-ellipsis-v"></i>
                                  <i className="fas fa-ellipsis-v"></i>
                                </div>
                                <div>{item.content}</div>
                                <div>{item.amount}</div>
                              </div>
                            </div>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </Col>
            </Row>
          </Col>
        </Row>
      </DragDropContext>

      {/* button */}

      <div className="flexCenterBetween my-5">
        <Button className={'btnOutline px-5 py-3'}>Previous</Button>
        <Button className={'btnFil px-5 py-3'}>Next</Button>
      </div>
    </div>
  )
}

export default Statement
