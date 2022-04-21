const issue = {
    title: "Prueba",
    repositoryNameAssociated: "Emmanuel",
    status: "Aprobado",
    numberOfComments: 10,
    labels: 2,
    author: "Emmanuel",
    dateCreated:"19-04-2022",
    lastUpdated:"19-04-2022",
    getTitleAndAuthor:function(){
        return `El nombre del autor del repo es: ${this.author}`
    },
    getGeneralInfo:function(){
        return `La fecha de creacion es: ${this.dateCreated} y la fecha de actualizacion es: ${this.lastUpdated}`
    }
}
console.log(issue.getTitleAndAuthor())
console.log(issue.getGeneralInfo())