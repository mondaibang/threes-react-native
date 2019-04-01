const COLORS = [{id:0,value:3},{id:1,value:1},{id:2,value:2}];//0:white // 1:blue // 2:red //

const randomIndexFromCollection = (collection) =>{
    var index = 0;
    for(var i =1, max = collection.length;i<max;i++){
        if(Math.random()< 1/(i+1)){
            index = i;
            
        }
    }
    return collection[index];
}

const shuffle = (arr)=>{
    return arr.sort(()=>Math.random() -0.5);
}

const randomIndexWhenStart = ()=>{
    var arr = shuffle([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]);
    var indexes=[];
    while (indexes.length<9) {
        for(var i = 1, max = arr.length;i<max;i++){
            if(Math.random() < 1/(i+1)){
                indexes.push(arr[i]);
                arr.splice(i,1);
                break;
            }
        }
        if(indexes.length < 9){
            indexes.push(arr[0]);
            arr.splice(0,1);
        }
        
    }
    return indexes;
};



class Node {
    constructor(id, color, value,move){
        this.id = id;
        this.color = color;
        this.value = value;
        this.move = move;
    }
}

class Graph{
    constructor(){
        this.size = 4;
        this.nodes={};

    };
    startGame(){
        var listRandom = randomIndexWhenStart();
        this.nodes={};
        for(let i = 0,m = listRandom.length;i<m;i++){
            var info = randomIndexFromCollection(COLORS);
            this.nodes[listRandom[i]] = new Node(listRandom[i], info.id,info.value,{});
        }
    };
    checkAbleDirects(){};
    checkUpLeft(){
        Object.keys(this.clone).forEach((id)=>{
            let node = this.clone[id];
            let nodeId = node.id;
            let edges = [];

            let topIndex = nodeId - this.size;
            let leftIndex = nodeId  -1;

            if(topIndex >=0){
                let w = this.checkDirect(nodeId,topIndex,'up');
                if(w >0) {
                    edges.push(new Edge(nodeId,topIndex,w,"up"));
                    this.directs.up = 0;
                };
            }
            if(nodeId % this.size !==0){
                let w = this.checkDirect(nodeId, leftIndex,'left');
                if(w>0) {
                    edges.push(new Edge(nodeId, leftIndex,w, "left"));
                    this.directs.left = 0;
                }
            }
            this.edgesbyNode[nodeId] = edges;

        });
    };
}