import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { IoMdClose } from "react-icons/io";

const ContactForm = () => {
	const { register, errors, handleSubmit, handleChange } = useForm({
		mode: "onChange",
	});

	const [status, setStatus] = useState({
		submitted: false,
		submitting: false,
		info: { error: false, msg: null },
	});

	const [inputs, setInputs] = useState({
		name: "",
		email: "",
		message: "",
	});

	const handleResponse = (status, msg) => {
		const nameInputField = document.getElementById("name");
		const emailInputField = document.getElementById("email");
		const messageInputField = document.getElementById("message");
		if (status === 200) {
			setStatus({
				submitted: true,
				submitting: false,
				info: { error: false, msg: msg },
			});
			setInputs({
				name: "",
				email: "",
				message: "",
			});
			nameInputField.value = "";
			emailInputField.value = "";
			messageInputField.value = "";
		} else {
			setStatus({
				info: { error: true, msg: msg },
			});
		}
	};

	const handleOnChange = (e) => {
		e.persist();
		setInputs((prev) => ({
			...prev,
			[e.target.id]: e.target.value,
		}));
		setStatus({
			submitted: false,
			submitting: false,
			info: { error: false, msg: null },
		});
	};

	const handleOnSubmit = async (e) => {
		setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
		const res = await fetch("/api/send", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(inputs),
		});
		const text = await res.text();
		handleResponse(res.status, text);
	};

	return (
		<div>
			<form
				onSubmit={handleSubmit(() => handleOnSubmit())}
				className='mt-10'
			>
				<div className='flex flex-col w-1/3 text-white'>
					<label htmlFor='name' className='flex flex-col mt-6'>
						What’s your name?
						<input
							onChange={handleOnChange}
							ref={register({ required: true, minLength: 2 })}
							name='name'
							id='name'
							type='text'
							// value={inputs.name}
							className={`bg-backgroundOne border-b-3 px-4 py-3 mt-2 ${
								!inputs.name
									? "border-primaryBrand"
									: !errors.name
									? "border-green-500"
									: "border-red-500"
							}`}
						/>
					</label>
					{errors.name && errors.name.type === "required" && (
						<p className='mt-4 text-red-500'>Your name is required.</p>
					)}
					<label htmlFor='email' className='flex flex-col mt-6'>
						Your email address
						<input
							onChange={handleOnChange}
							ref={register({
								required: true,
								pattern: /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/,
							})}
							name='email'
							id='email'
							type='text'
							className={`bg-backgroundOne border-b-3 px-4 py-3 mt-2 ${
								!inputs.email
									? "border-primaryBrand"
									: !errors.email
									? "border-green-500"
									: "border-red-500"
							}`}
						/>
					</label>
					{errors.email && errors.email.type === "required" && (
						<p className='mt-4 text-red-500'>Your email is required.</p>
					)}
					{errors.email && errors.email.type === "pattern" && (
						<p className='mt-4 text-red-500'>
							The entered email address is not valid.
						</p>
					)}
					<label htmlFor='message' className='flex flex-col mt-6'>
						Type your message here
						<textarea
							onChange={handleOnChange}
							ref={register({
								required: true,
								minLength: 10,
								maxLength: 200,
							})}
							name='message'
							id='message'
							type='text'
							maxLength='200'
							className={`bg-backgroundOne border-b-3 px-4 py-3 min-h-32 mt-2 ${
								!inputs.message
									? "border-primaryBrand"
									: !errors.message
									? "border-green-500"
									: "border-red-500"
							}`}
						/>
					</label>
					<p className='mt-4'>
						{inputs.message.length <= 200
							? `${inputs.message.length}/200`
							: "hi"}
					</p>
					{errors.message && errors.message.type === "required" && (
						<p className='mt-4 text-red-500'>Your message is required.</p>
					)}
					{errors.message && errors.message.type === "minLength" && (
						<p className='mt-4 text-red-500'>
							Your message requires a length of 10 characters.
						</p>
					)}
					{errors.message && errors.message.type === "maxLength" && (
						<p className='mt-4 text-red-500'>Your message is too long.</p>
					)}
					<button
						type='submit'
						className={`w-auto px-8 py-4 mt-10 text-base font-medium text-white duration-300 ease-in-out cursor-pointer ${
							!status.submitting
								? !status.submitted
									? "bg-primaryBrand hover:bg-primaryGrey"
									: "bg-green-500 hover:bg-green-600"
								: "bg-yellow-400 hover:bg-yellow-500"
						}`}
						disabled={status.submitting || status.submitted}
					>
						{!status.submitting
							? !status.submitted
								? "Send message"
								: "Message sent"
							: "Sending..."}
					</button>
				</div>
			</form>
		</div>
	);
};

export default ContactForm;
