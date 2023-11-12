
import { getUser, login, resetLoginFormError } from '@/features/auth/authSlice';
import { selectLoginFormError } from '@/features/auth/selectrors';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { useCallback, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Logo from "@/assets/LogoTrip.png";
import HText from '@/shared/HText';
import { motion } from 'framer-motion';
import { SelectedPage } from '@/shared/types';
import Footer from '@/scenes/footer';
import PageGraphic from "@/assets/login.png";



function LogInPage (): JSX.Element {

	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const error = useAppSelector(selectLoginFormError);
	const [email, setName] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = useCallback(
		async (event: React.FormEvent) => {
			event.preventDefault();
			// делаем диспатч санка
			const dispatchResult = await dispatch(
				login({
					email,
					password,
				})
			);
			// проверяем, что санк login зарезолвился успешно
			if (login.fulfilled.match(dispatchResult)) {
				dispatch(getUser()); // подгрузит юзера
				navigate('/'); // переведет на стартовую страницу
			}

			// выводим в консоль ошибку если санк login зареджектился
			if (login.rejected.match(dispatchResult)) {
				// eslint-disable-next-line no-console
				console.error(dispatchResult.error.message);
			}
		},
		[dispatch, email, navigate, password]
	);

	const handleNameChange = useCallback(
		(event: React.ChangeEvent<HTMLInputElement>) => {
			setName(event.target.value);
			// 332 очищаем ошибку
			dispatch(resetLoginFormError());
		},
		[dispatch]
	);

	const handlePasswordChange = useCallback(
		(event: React.ChangeEvent<HTMLInputElement>) => {
			setPassword(event.target.value);
			// 332 очищаем ошибку
			dispatch(resetLoginFormError());
		},
		[dispatch]
	);

	function setSelectedPage(LogIn: any): void {
		throw new Error('Function not implemented.');
	}

  return (
	<>
		<div className= "bg-gray-20 drop-shadow fixed top-0 z-30 w-full py-6` flex items-center justify-center">
        
        	<NavLink to={'/'}><img alt="logo" src={Logo} /></NavLink>
        </div>
			<section id="login" className="mx-auto w-5/6 pt-24 pb-32">
      			<motion.div
       	 			onViewportEnter={() => setSelectedPage(SelectedPage.LogIn)}
				>
				

        				{/* HEADER */}

        		<motion.div
          			className="md:w-3/5"
          			initial="hidden"
          			whileInView="visible"
          			viewport={{ once: true, amount: 0.5 }}
          			transition={{ duration: 0.5 }}
          			variants={{
            		hidden: { opacity: 0, x: -50 },
            		visible: { opacity: 1, x: 0 },
          			}}
        		>
          <HText>
            <span className="text-primary-500">LOG in NOW</span> and CONTINUE EXPLORING the WORLD TOMORROW
          </HText>

        </motion.div>

        {/* FORM AND IMAGE */}
        <div className="mt-10 justify-between gap-8 md:flex">
          <motion.div
            	className="mt-10 basis-3/5 md:mt-0"
            	initial="hidden"
            	whileInView="visible"
            	viewport={{ once: true, amount: 0.5 }}
            	transition={{ duration: 0.5 }}
            	variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            	}}
        	>
			
			<form className="auth-form" onSubmit={handleSubmit}>

			{error && (
				<div className="invalid-feedback mb-3" style={{ display: 'block' }}>
					{error}
				</div>
			)}
			<div className="mb-3">
				{/* <label htmlFor="name-input" className="form-label"> 
					 NAME
				</label>  */}
				<input 
					type="text"
					placeholder="EMAIL"
					className={`form-control ${error ? 'is-invalid' : ''} mb-5 w-full rounded-lg bg-secondary-400
					px-5 py-3 placeholder-blue`}
				
					id="name-input"
					name="username"
					value={email}
					onChange={handleNameChange}
				/>
			</div>
			<div className="mb-3">
				{/* <label htmlFor="password-input" className="form-label">
					PASSWORD
				</label> */}
				<input
					type="password"
					placeholder="PASSWORD"
					className={`form-control ${error ? 'is-invalid' : ''} mb-5 w-full rounded-lg bg-secondary-400
					px-5 py-3 placeholder-blue`}
					id="password-input"
					name="password"
					value={password}
					onChange={handlePasswordChange}
				/>
			</div>
			<button type="submit" className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white">
				LOG IN
			</button>
		</form>
		</motion.div>
		 {/* IMAGE */}
			<motion.div
           		className="relative mt-16 basis-2/5 md:mt-0"
            	initial="hidden"
            	whileInView="visible"
            	viewport={{ once: true, amount: 0.5 }}
            	transition={{ delay: 0.2, duration: 0.5 }}
            	variants={{
              	hidden: { opacity: 0, y: 50 },
              	visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1] md:before:content-evolvetext">
              <img
                className="w-full"
                alt="page-graphic"
                src={PageGraphic}
              />
            </div>
          </motion.div>
		  </div>
          </motion.div>
		  </section>
    <Footer/>
    </>
	);
}

export default LogInPage;
