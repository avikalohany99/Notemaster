var app = new Vue({
    el: "#app",
    data: {
        title: 'Notemaster', //Notes
        note: {
            title: '',
            text: '',
            num: '',
        },
        notes: [
            {
                title:'Visited Hawaii',
                text: 'Loved the beaches',
                date:  new Date(Date.now()).toLocaleString(),
                num: '1'
            }
        ]
    },
    methods:{
        addNote() {
            let{ title, text, num } = this.note
            this.notes.push({
                title,
                text,
                date: new Date(Date.now()).toLocaleString(),
                num,
            })
        },
        removeNote(index) {
            this.notes.splice(index, 1)
        }
    }
})