import React from 'react';

const ChatBox = ({ setChatModal }) => {
	return (
		<>
			<div className='chat-header' style={{ marginTop: '-1rem' }}>
				<span>گفت و گو</span>
				<div className='close-chat' onClick={() => setChatModal()}>
					<i className='fal fa-times fa-fw'></i> بستن چت
				</div>
			</div>

			<div className='chat-body'>
				<div className='other-chat chat-box'>
					<div className='chat-img'>
						<img src='img/user.png' className='img-fluid' alt='' />
					</div>
					<div className='chat-text'>
						<div className='chat-body-header'>
							<div className='chat-body-date'>12:15</div>
							<div className='chat-body-person-name'>علی احمدی</div>
						</div>
						<div className='chat-body-text'>
							حداقل مساحت مورد نیاز شما چقدر است؟ آیا پارکینگ یا انبارى لازم
							است؟ آیا پولتان نقد است يا بايد ملكى را بفروشيد؟
						</div>
					</div>
				</div>

				<div className='your-chat chat-box'>
					<div className='chat-text'>
						<div className='chat-body-header'>
							<div className='chat-body-person-name'>شما</div>
							<div className='chat-body-date'>12:18</div>
						</div>
						<div className='chat-body-text'>
							حداقل مساحت مورد نیاز شما چقدر است؟ آیا پارکینگ یا انبارى لازم
							است؟ آیا پولتان نقد است يا بايد ملكى را بفروشيد؟
						</div>
						<div className='deliverd-icon text-left'>
							<i className='icon icon-deliverd'></i>
						</div>
					</div>
				</div>

				<div className='your-chat chat-box'>
					<div className='chat-text'>
						<div className='chat-body-header'>
							<div className='chat-body-person-name'>شما</div>
							<div className='chat-body-date'>12:18</div>
						</div>
						<div className='chat-body-text'>
							حداقل مساحت مورد نیاز شما چقدر است؟ آیا پارکینگ یا انبارى لازم
							است؟ آیا پولتان نقد است يا بايد ملكى را بفروشيد؟
						</div>
						<div className='deliverd-icon text-left'>
							<i className='icon icon-deliverd'></i>
						</div>
					</div>
				</div>
			</div>

			<div className='chat-footer'>
				<div className='chat-footer-textarea'>
					<textarea
						className='form-control'
						placeholder='نوشتن پیام ...'></textarea>
				</div>
				<div className='chat-footer-send'>ارسال</div>
			</div>
		</>
	);
};

export default ChatBox;
