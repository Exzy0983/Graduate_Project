const initialState = [
    { id: 1, title: 'Tutorial 1', completed: false },
    { id: 2, title: 'Tutorial 2', completed: true },
    // 더 많은 튜토리얼 추가 가능
  ];
  
  export default function tutorialsReducer(state = initialState, action) {
    switch (action.type) {
      case 'MARK_COMPLETE':
        return state.map((tutorial) =>
          tutorial.id === action.payload
            ? { ...tutorial, completed: true }
            : tutorial
        );
      default:
        return state;
    }
  }
  