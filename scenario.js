const steps = [{
    name:'Общая информация',
    questions: [{
        text:'Как вас зовут?',
        answerStoreField:'name',
    },{
        text:'Сколько вам лет',
        answerStoreField:'age',

    },{
        text:'Ваш номер телефона',
        answerStoreField:'phoneNumber',   
    },{
        text:'Ваша электронная почта',
        answerStoreField:'email',
    }]
},{
    name:'Цель тренировки',
    questions: [{
        text:'Занимались ли вы фитнесом раньше?',
        buttons:['ДА','НЕТ'],
        answerStoreField:'experience',
    },{
        text:'Сколько вы планируете заниматься?',
        answerStoreField:'time',
    },{
        text:'Как регулярно вы хотите заниматься?',
        answerStoreField:'regulatity'
    },{
        text:'Какая длительность тренировки вам подходит?',
        buttons:['Час','Полтора часа','Два часа','Два с половиной часа'],
        answerStoreField:'duration'
    },{
        text:'Когда вы хотите начать тренироваться?',
        answerStoreField:'start'
    }]
}]
module.exports={
    steps:steps,
}