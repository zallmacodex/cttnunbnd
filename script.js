const _0x32c0ea=_0x5b23;function _0x5b23(_0x32d5df,_0x27230b){const _0x2872e5=_0x2872();return _0x5b23=function(_0x5b2315,_0x1f1269){_0x5b2315=_0x5b2315-0x6e;let _0x3d6b5b=_0x2872e5[_0x5b2315];return _0x3d6b5b;},_0x5b23(_0x32d5df,_0x27230b);}(function(_0x4ce64e,_0xed1f52){const _0x4be79a=_0x5b23,_0x3314aa=_0x4ce64e();while(!![]){try{const _0x59f91c=parseInt(_0x4be79a(0x87))/0x1*(-parseInt(_0x4be79a(0x81))/0x2)+parseInt(_0x4be79a(0x88))/0x3+-parseInt(_0x4be79a(0x7b))/0x4+parseInt(_0x4be79a(0x96))/0x5+-parseInt(_0x4be79a(0x83))/0x6*(-parseInt(_0x4be79a(0x8d))/0x7)+-parseInt(_0x4be79a(0x89))/0x8+parseInt(_0x4be79a(0x98))/0x9;if(_0x59f91c===_0xed1f52)break;else _0x3314aa['push'](_0x3314aa['shift']());}catch(_0x4055ef){_0x3314aa['push'](_0x3314aa['shift']());}}}(_0x2872,0xe2d9b));const passwords=[_0x32c0ea(0x91),_0x32c0ea(0xa1)];function _0x2872(){const _0x11843f=['Kata\x20sandi\x20tidak\x20sesuai!','entries-list','entry','7175728QLkoLR','<strong>Catatan\x20#','owner','includes','note-index','preventDefault','198CiMKLG','</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<em>','649626xhpJxE','active','</strong><br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>','view-notes','15679NbdRLI','2336067fJBUEr','1950808stGYVw','.page','submit','innerHTML','105eWlJgv','getElementById','addEventListener','className','alam1312','Catatan\x20berhasil\x20ditambahkan!','length','</em>','reset','994230AqPDQS','Catatan\x20berhasil\x20dihapus!','17258247gBOUjN','div','Nomor\x20catatan\x20tidak\x20valid!','querySelectorAll','forEach','remove','delete-password','error','note-owner','alam1502','catch','delete-note-form','<br>','add-note-form','date','createElement','classList','Error\x20loading\x20notes:','then','json','note-content','value'];_0x2872=function(){return _0x11843f;};return _0x2872();}let notes=[];function loadNotes(){const _0x2a1f0c=_0x32c0ea;fetch('catatan.json')[_0x2a1f0c(0x74)](_0xf83985=>_0xf83985[_0x2a1f0c(0x75)]())['then'](_0x13a54c=>{notes=_0x13a54c,displayNotes();})[_0x2a1f0c(0xa2)](_0x1bebc6=>console[_0x2a1f0c(0x9f)](_0x2a1f0c(0x73),_0x1bebc6));}function displayNotes(){const _0x1d9938=_0x32c0ea,_0x2ec8ce=document[_0x1d9938(0x8e)](_0x1d9938(0x79));_0x2ec8ce[_0x1d9938(0x8c)]='',notes['forEach']((_0x18ac32,_0x144c1f)=>{const _0x52cd9d=_0x1d9938,_0x1e31bb=document[_0x52cd9d(0x71)](_0x52cd9d(0x99));_0x1e31bb[_0x52cd9d(0x90)]=_0x52cd9d(0x7a),_0x1e31bb[_0x52cd9d(0x8c)]=_0x52cd9d(0x7c)+(_0x144c1f+0x1)+'</strong><br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>Nama:\x20'+_0x18ac32[_0x52cd9d(0x7d)]+_0x52cd9d(0x85)+_0x18ac32['content']['replace'](/\n/g,_0x52cd9d(0x6e))+_0x52cd9d(0x82)+_0x18ac32[_0x52cd9d(0x70)]+_0x52cd9d(0x94),_0x2ec8ce['appendChild'](_0x1e31bb);});}document['getElementById'](_0x32c0ea(0x6f))[_0x32c0ea(0x8f)](_0x32c0ea(0x8b),function(_0x12b50a){const _0x18ca49=_0x32c0ea;_0x12b50a[_0x18ca49(0x80)]();const _0x3f8a0a=document['getElementById'](_0x18ca49(0xa0))['value'],_0x253b79=document[_0x18ca49(0x8e)]('add-password')['value'],_0x1922ce=document['getElementById'](_0x18ca49(0x76))[_0x18ca49(0x77)];if(passwords[_0x18ca49(0x7e)](_0x253b79)){const _0x5859ce={'owner':_0x3f8a0a,'content':_0x1922ce,'date':new Date()['toLocaleString']()};notes['push'](_0x5859ce),saveNotes(),document[_0x18ca49(0x8e)]('add-note-form')[_0x18ca49(0x95)](),alert(_0x18ca49(0x92)),showPage(_0x18ca49(0x86)),displayNotes();}else alert(_0x18ca49(0x78));}),document[_0x32c0ea(0x8e)](_0x32c0ea(0xa3))['addEventListener'](_0x32c0ea(0x8b),function(_0x3aa8ae){const _0x44268e=_0x32c0ea;_0x3aa8ae[_0x44268e(0x80)]();const _0x390fa3=document[_0x44268e(0x8e)](_0x44268e(0x9e))[_0x44268e(0x77)],_0x5d331c=parseInt(document[_0x44268e(0x8e)](_0x44268e(0x7f))[_0x44268e(0x77)]);passwords[_0x44268e(0x7e)](_0x390fa3)?_0x5d331c>=0x0&&_0x5d331c<notes[_0x44268e(0x93)]?(notes['splice'](_0x5d331c,0x1),saveNotes(),alert(_0x44268e(0x97)),displayNotes()):alert(_0x44268e(0x9a)):alert('Kata\x20sandi\x20tidak\x20sesuai!'),document['getElementById'](_0x44268e(0xa3))[_0x44268e(0x95)]();});function showPage(_0x3b9335){const _0x2af22c=_0x32c0ea;document[_0x2af22c(0x9b)](_0x2af22c(0x8a))[_0x2af22c(0x9c)](_0x452915=>_0x452915[_0x2af22c(0x72)][_0x2af22c(0x9d)](_0x2af22c(0x84))),document[_0x2af22c(0x8e)](_0x3b9335)['classList']['add'](_0x2af22c(0x84));}loadNotes();