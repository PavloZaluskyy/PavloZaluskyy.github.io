new Vue({
	el: '#ell',
	data: {
		radio: 'English',
		rand: 0,
		hint: '',
		messager: '',
		inpute : '',
		words : 
			[
				{
					id: 1,
					word: 'Choose',
					translate: 'Обирати'
				},
				{
					id: 2,
					word: 'Issue',
					translate: 'Проблема'
				},
				{
					id: 3,
					word: 'Claim',
					translate: 'Претензія'
				},
				{
					id: 4,
					word: 'Ever',
					translate: 'Коли - небуть'
				},
				{
					id: 5,
					word: 'Quite',
					translate: 'Цілком'
				},
				{
					id: 6,
					word: 'Bring',
					translate: 'Приносити'
				},
				{
					id: 7,
					word: 'Still',
					translate: 'Досі'
				},
				{
					id: 8,
					word: 'Least',
					translate: 'Найменше'
				},
				{
					id: 9,
					word: 'Different',
					translate: 'Інший'
				},
				{
					id: 10,
					word: 'Patient',
					translate: 'Терплячий'
				},
				{
					id: 11,
					word: 'Share',
					translate: 'Ділитися'
				},
				{
					id: 12,
					word: 'Involve',
					translate: 'Залучати'
				},
				{
					id: 13,
					word: 'Without',
					translate: 'Без'
				},
				{
					id: 14,
					word: 'It`s',
					translate: 'Його'
				},
				{
					id: 15,
					word: 'Learn',
					translate: 'Вчити'
				},
				{
					id: 16,
					word: 'Since',
					translate: 'З'
				},
				{
					id: 17,
					word: 'Question',
					translate: 'Питання'
				},
				{
					id: 18,
					word: 'Cost',
					translate: 'Коштувати'
				},
				{
					id: 19,
					word: 'Reason',
					translate: 'Причина'
				},
				{
					id: 20,
					word: 'Wish',
					translate: 'Бажати'
				},
				{
					id: 21,
					word: 'Particular',
					translate: 'Вийнятковий'
				},
				{
					id: 22,
					word: 'Increase',
					translate: 'Зростати'
				},
				{
					id: 23,
					word: 'Property',
					translate: 'Власність'
				},
				{
					id: 24,
					word: 'Whole',
					translate: 'Цілий'
				},
				{
					id: 25,
					word: 'However',
					translate: 'Однак'
				},
				{
					id: 26,
					word: 'They',
					translate: 'Вони'
				},
				{
					id: 27,
					word: 'Government',
					translate: 'Уряд'
				},
				{
					id: 28,
					word: 'Cause',
					translate: 'Спричиняти'
				},
				{
					id: 29,
					word: 'Often',
					translate: 'Часто'
				},
				{
					id: 30,
					word: 'Out',
					translate: 'Із'
				},
				{
					id: 31,
					word: 'Change',
					translate: 'Зміни'
				},
				{
					id: 32,
					word: 'Performance',
					translate: 'Виступ'
				},
				{
					id: 33,
					word: 'Possible',
					translate: 'Можливий'
				},
				{
					id: 34,
					word: 'Identify',
					translate: 'Іденфікувати'
				},{
					id: 35,
					word: 'Consaider',
					translate: 'Розглядати'
				},
				{
					id: 36,
					word: 'Advice',
					translate: 'Порада'
				},
				{
					id: 37,
					word: 'Both',
					translate: 'Обидва'
				},
			]
		

	},
	methods: {
		Gen: function() {
			var maxl = this.words.length  ;
			this.rand =
			Math.floor(Math.random() * maxl);
			if (this.radio == 'English'){
			return  document.getElementById("demo").innerHTML = 
			this.words[this.rand].word; this.hint = '';}
			else
			{
			 return  document.getElementById("demo").innerHTML = 
			this.words[this.rand].translate; this.hint = '';}

		},
		audit: function(){
			if (this.radio=='English') {
				if (this.inpute == this.words[this.rand].translate) 
					this.messager = 'True!';			
				else
					this.messager = 'False!';
			}else{
				if (this.inpute == this.words[this.rand].word) 
					this.messager = 'True!';			
				else
					this.messager = 'False!';
			}
		this.inpute = '';
		this.Gen();
		
		},
		Hint: function(){
			if (this.radio=='English') {
				this.hint = this.words[this.rand].translate;
			}
			else{
				this.hint = this.words[this.rand].word;
			}
		}
	}
})

