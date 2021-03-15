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
				{
					id: 38,
					word: 'Clothes',
					translate: 'Одяг'
				},
				{
					id: 39,
					word: 'Cap',
					translate: 'Кепка'
				},
				{
					id: 40,
					word: 'Hat',
					translate: 'Капелюх'
				},
				{
					id: 41,
					word: 'Coat',
					translate: 'Пальто'
				},
				{
					id: 42,
					word: 'Raincoat',
					translate: 'Плащ'
				},
				{
					id: 43,
					word: 'Fur coat',
					translate: 'Шуба'
				},
				{
					id: 44,
					word: 'Pullover',
					translate: 'Пуловер'
				},
				{
					id: 45,
					word: 'Sweater',
					translate: 'Светер'
				},
				{
					id: 46,
					word: 'Jumper',
					translate: 'Джампер'
				},
				{
					id: 47,
					word: 'Suit',
					translate: 'Костюм'
				},
				{
					id: 48,
					word: 'Jacket',
					translate: 'Піджак'
				},
				{
					id: 49,
					word: 'Shirt',
					translate: 'Сорочка'
				},
				{
					id: 50,
					word: 'Blouse',
					translate: 'Блузка'
				},
				{
					id: 51,
					word: 'T-shirt',
					translate: 'Футболка'
				},
				{
					id: 52,
					word: 'Waistcoat',
					translate: 'Жилет'
				},
				{
					id: 53,
					word: 'Dress',
					translate: 'Сукня'
				},
				{
					id: 54,
					word: 'Skirt',
					translate: 'Спідниця'
				},
				{
					id: 55,
					word: 'Pocket',
					translate: 'Кишеня'
				},
				{
					id: 56,
					word: 'Sleeve',
					translate: 'Рукав'
				},
				{
					id: 57,
					word: 'Collar',
					translate: 'Комір'
				},
				{
					id: 58,
					word: 'Thousers',
					translate: 'Штани'
				},
				{
					id: 59,
					word: 'Pants',
					translate: 'Брюки'
				},
				{
					id: 60,
					word: 'Jeans',
					translate: 'Джинси'
				},
				{
					id: 61,
					word: 'Shorts',
					translate: 'Шорти'
				},
				{
					id: 62,
					word: 'Footwear',
					translate: 'Взуття'
				},
				{
					id: 63,
					word: 'Shoes',
					translate: 'Туфлі'
				},
				{
					id: 64,
					word: 'Boots',
					translate: 'Чоботи'
				},
				{
					id: 65,
					word: 'Trainers',
					translate: 'Кросівки'
				},
				{
					id: 66,
					word: 'Sneakers',
					translate: 'Кеди'
				},
				{
					id: 67,
					word: 'Sandals',
					translate: 'Сандалі'
				},
				{
					id: 68,
					word: 'High-heels',
					translate: 'Туфлі на високих підборах'
				},
				{
					id: 69,
					word: 'Slippers',
					translate: 'Шльопанці'
				},
				{
					id: 70,
					word: 'Belt',
					translate: 'Пояс'
				},
				{
					id: 71,
					word: 'Tights',
					translate: 'Колготи'
				},
				{
					id: 72,
					word: 'Shoes',
					translate: 'Шкарпетки'
				},
				{
					id: 73,
					word: 'Underwear',
					translate: 'Нижня білизна'
				},
				{
					id: 74,
					word: 'Nightdress',
					translate: 'Нічна сорочка'
				},
				{
					id: 75,
					word: 'Pyjamas',
					translate: 'Піжама'
				},
				{
					id: 76,
					word: 'Panties',
					translate: 'Труси жіночі'
				},
				{
					id: 77,
					word: 'Bra',
					translate: 'Бюстгальтер'
				},
				{
					id: 78,
					word: 'Swimming trunks',
					translate: 'Плавки'
				},
				{
					id: 79,
					word: 'Swimming suit',
					translate: 'Купальник'
				},
				{
					id: 80,
					word: 'Accessories',
					translate: 'Аксесуари'
				},
				{
					id: 81,
					word: 'Glasses',
					translate: 'Окуляри'
				},
				{
					id: 82,
					word: 'Sunglasses',
					translate: 'Окуляри від сонця'
				},
				{
					id: 83,
					word: 'Tie',
					translate: 'Краватка'
				},
				{
					id: 84,
					word: 'Scarf',
					translate: 'Шарф'
				},
				{
					id: 85,
					word: 'Gloves',
					translate: 'Рукавиці'
				},
				{
					id: 86,
					word: 'Lace',
					translate: 'Шнурівка для взуття'
				},
				{
					id: 87,
					word: 'Handkerchief',
					translate: 'Хустинка'
				},
				{
					id: 88,
					word: 'Handbag',
					translate: 'Сумочка'
				},
				{
					id: 89,
					word: 'Ring',
					translate: 'Перстень'
				},
				{
					id: 90,
					word: 'Earring',
					translate: 'Сережка'
				},
				{
					id: 91,
					word: 'Bracelet',
					translate: 'Браслет'
				},
				{
					id: 92,
					word: 'Necklace',
					translate: 'Намисто'
				},
				{
					id: 93,
					word: 'Purse',
					translate: 'Гаманець'
				},
				{
					id: 94,
					word: 'Wallet',
					translate: 'Гаманець'
				},
				{
					id: 95,
					word: 'Brooch',
					translate: 'Брошка'
				},
				{
					id: 96,
					word: 'Notice',
					translate: 'Помічати'
				},
				{
					id: 97,
					word: 'Absence',
					translate: 'Відсутність'
				},
				{
					id: 98,
					word: 'Available',
					translate: 'Доступний'
				},
				{
					id: 99,
					word: 'Pass',
					translate: 'Здавати'
				},
				{
					id: 100,
					word: 'Impress',
					translate: 'Вразити'
				},
				{
					id: 101,
					word: 'Owe',
					translate: 'Провина'
				},
				{
					id: 102,
					word: 'Lend',
					translate: 'Позичити'
				},
				{
					id: 103,
					word: 'Despite',
					translate: 'Не дивлячись на'
				},
				{
					id: 104,
					word: 'Realize',
					translate: 'Усвідомити'
				},
				{
					id: 105,
					word: 'Necessary',
					translate: 'Необхідний'
				},
				{
					id: 106,
					word: 'Point',
					translate: 'Вказати'
				},
				{
					id: 107,
					word: 'Attitude',
					translate: 'Відносини'
				},
				{
					id: 108,
					word: 'Insist',
					translate: 'Наполягати'
				},
				{
					id: 109,
					word: 'Laugh',
					translate: 'Сміятися'
				},
				{
					id: 110,
					word: 'Fence',
					translate: 'Паркан'
				},
				{
					id: 111,
					word: 'Deliver',
					translate: 'Доставляти'
				},
				{
					id: 112,
					word: 'Introduce someone to someone',
					translate: 'Представляти когось комусь'
				},
				{
					id: 113,
					word: 'Consider',
					translate: 'Pозглядати, враховувати'
				},
				{
					id: 114,
					word: 'Expect',
					translate: 'Oчікувати'
				},
				{
					id: 115,
					word: 'Thoroughly',
					translate: 'Детальніше'
				},
				{
					id: 116,
					word: 'Deny',
					translate: 'Заперечувати'
				},
				{
					id: 117,
					word: 'Interrupt',
					translate: 'Перебивати'
				},{
					id: 118,
					word: 'Influence',
					translate: 'Впливати'
				},{
					id: 119,
					word: 'Prepare',
					translate: 'Готуватися до чогось'
				},
				{
					id: 120,
					word: 'Earn',
					translate: 'Заробляти'
				},
				{
					id: 121,
					word: 'Devote',
					translate: 'Приділити'
				},
				{
					id: 122,
					word: 'Invite',
					translate: 'Запрошувати'
				},
				{
					id: 123,
					word: 'Sudeenly',
					translate: 'Pаптом'
				},
				{
					id: 124,
					word: 'Deserv',
					translate: 'Заслужити'
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

